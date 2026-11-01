import test from 'node:test';
import assert from 'node:assert/strict';
import {LESSONS,lessonForQuestion} from '../lessons.js';
import {BANK,SUBJECTS} from '../data.js';
import {CURRICULUM_GUIDE,curriculumUrl,curriculumSummary} from '../curriculum-guide.js';
import {REFERENCES} from '../references.js';

test('all sixteen subjects have curriculum introductions, official sources and practical tasks',()=>{
 assert.equal(Object.keys(CURRICULUM_GUIDE).length,16);
 for(const subject of Object.keys(SUBJECTS)){
  assert.ok(CURRICULUM_GUIDE[subject],subject);
  const chapters=LESSONS.filter(l=>l.subject===subject&&l.id.startsWith('curriculum-'));
  assert.ok(chapters.length,subject);
  assert.ok(REFERENCES.some(r=>r.subject===subject&&r.url===curriculumUrl(subject)));
  assert.equal(new URL(curriculumUrl(subject)).hostname,'syllabuswebb.skolverket.se');
  assert.match(curriculumSummary(subject),/hela högstadiet/);
  assert.match(curriculumSummary(subject),/inte en komplett lärobok/);
  for(const chapter of chapters){
   assert.ok(chapter.paragraphs.length>=2,chapter.id);
   assert.ok(chapter.activity.length>60,chapter.id);
   const qs=BANK.filter(q=>q.lessonId===chapter.id);
   assert.equal(qs.length,chapter.topics.length,chapter.id);
   for(const q of qs)assert.equal(lessonForQuestion(q).id,chapter.id);
  }
 }
});
test('water-safety reading explicitly requires practical instruction',()=>{
 const l=LESSONS.find(l=>l.id==='curriculum-pe-water');
 assert.match(l.mistake,/inte att man kan simma/);
 assert.match(l.activity,/idrottsläraren/);
});
