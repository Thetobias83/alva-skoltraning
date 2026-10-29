import test from 'node:test';
import assert from 'node:assert/strict';
import {ROME_LESSONS,ROME_QUESTIONS,ROME_TIMELINE} from '../rome.js';
import {lessonForQuestion} from '../lessons.js';
import {BANK,SUBJECTS} from '../data.js';
import {buildExam} from '../core.js';
test('Roman questions route to their own explanation and remain in History',()=>{
 assert.equal(ROME_LESSONS.length,6);assert.equal(ROME_QUESTIONS.length,24);assert.ok(SUBJECTS.Historia.topics.includes('Romartiden'));
 for(const q of ROME_QUESTIONS){assert.deepEqual(BANK.find(item=>item.id===q.id),q);assert.equal(q.s,'Historia');assert.equal(q.t,'Romartiden');assert.equal(lessonForQuestion(q).id,q.lessonId);}
 for(const l of ROME_LESSONS)assert.ok(ROME_QUESTIONS.some(q=>q.lessonId===l.id));
});
test('a Rome exam can contain ten unique Roman questions at every level',()=>{
 for(const level of [1,2,3]){const qs=buildExam(BANK.filter(q=>q.s==='Historia'&&q.t==='Romartiden'&&q.l<=level),10);assert.equal(qs.length,10);assert.equal(new Set(qs.map(q=>q.id)).size,10);assert.ok(qs.every(q=>q.lessonId.startsWith('rome-')));}
});
test('timeline distinguishes traditional dates, the fall of the west and survival of the east',()=>{
 assert.match(ROME_TIMELINE.find(x=>x[0]==='753 f.v.t.')[1],/inte ett säkert/);
 assert.match(ROME_TIMELINE.find(x=>x[0]==='476 e.v.t.')[1],/väst/);
 assert.match(ROME_TIMELINE.find(x=>x[0]==='1453 e.v.t.')[1],/Östrom/);
});

