import test from 'node:test';
import assert from 'node:assert/strict';
import {LESSONS,lessonsFor,lessonForQuestion} from '../lessons.js';
import {SUBJECTS,BANK} from '../data.js';
import {KNOWLEDGE_QUESTIONS} from '../knowledge-questions.js';
import {REFERENCES} from '../references.js';
test('every declared subject area resolves to relevant teaching, not an unrelated fallback',()=>{
 for(const [subject,config] of Object.entries(SUBJECTS)){
  const list=lessonsFor(subject);assert.ok(list.length>=5,subject);
  for(const topic of config.topics){const chosen=lessonForQuestion({s:subject,t:topic,q:''});assert.ok(chosen.topics.includes(topic),`${subject}: ${topic}`);assert.ok(BANK.some(q=>q.s===subject&&q.t===topic&&q.l===1),`missing focused beginner practice: ${subject}: ${topic}`);}
 }
});
test('faith-specific practice returns its own tradition and has further reading',()=>{
 for(const faith of ['Kristendom','Islam','Judendom','Buddhism','Hinduism']){
  const lesson=lessonsFor('Religion').find(l=>l.topics.includes(faith));assert.ok(lesson,faith);
  assert.ok(lesson.paragraphs.length>=3);assert.ok(lesson.terms.length>=3);
  assert.ok(REFERENCES.some(r=>r.subject===lesson.referenceSubject));
  const qs=BANK.filter(q=>q.s==='Religion'&&q.t===faith);assert.ok(qs.length>=4);
  for(const q of qs)assert.equal(lessonForQuestion(q).id,lesson.id);
 }
 for(const q of KNOWLEDGE_QUESTIONS){assert.equal(lessonForQuestion(q).id,q.lessonId);assert.equal(q.a.length,3);}
});
test('a lesson ID from a different subject cannot override the question subject',()=>{
 assert.equal(lessonForQuestion({s:'Matematik',t:'Bråk',q:'',lessonId:'knowledge-islam'}).subject,'Matematik');
});
test('subject catalog has unique lessons and retains the existing Roman and science explanations',()=>{
 assert.equal(new Set(LESSONS.map(l=>l.id)).size,LESSONS.length);
 assert.equal(LESSONS.filter(l=>l.id.startsWith('rome-')).length,6);
 assert.ok(LESSONS.find(l=>l.id==='chem-elements').paragraphs.some(p=>p.includes('isotoper')));
 assert.ok(LESSONS.find(l=>l.id==='math-fractions').paragraphs.some(p=>p.includes('5/6')));
 for(const l of LESSONS.filter(l=>l.id.startsWith('reading-')||l.id.startsWith('knowledge-'))){assert.ok(l.paragraphs.length>=3,l.id);assert.ok(l.example&&l.mistake&&l.recall&&l.answer,l.id);}
});
