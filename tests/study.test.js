import test from 'node:test';
import assert from 'node:assert/strict';
import {STUDY_LESSONS,STUDY_VIDEOS} from '../study-skills.js';
import {STUDY_QUESTIONS} from '../study-questions.js';
import {lessonForQuestion} from '../lessons.js';
import {CURRICULUM_GUIDE,curriculumSummary} from '../curriculum-guide.js';
import {studySelectionFeedback,renderStudyExtras,STUDY_TEXT_PRACTICE} from '../study-workshop.js';

test('study skills is an extra subject with eight methods, matching practice and Swedish videos',()=>{
 assert.equal(STUDY_LESSONS.length,8);assert.equal(STUDY_QUESTIONS.length,24);
 assert.equal(CURRICULUM_GUIDE.Studieteknik,undefined);
 assert.equal(curriculumSummary('Studieteknik'),'');
 for(const l of STUDY_LESSONS){
  assert.equal(l.subject,'Studieteknik');assert.equal(l.steps.length,4);
  assert.ok(STUDY_VIDEOS[l.video]);
  const qs=STUDY_QUESTIONS.filter(q=>q.lessonId===l.id);
  assert.deepEqual(qs.map(q=>q.l),[1,2,3]);
  for(const q of qs)assert.equal(lessonForQuestion(q).id,l.id);
  const html=renderStudyExtras(l);assert.match(html,/Öppna filmen hos UR/);
  assert.match(html,/target="_blank" rel="noopener noreferrer"/);
  assert.doesNotMatch(html,/<iframe/);
 }
 for(const v of Object.values(STUDY_VIDEOS))assert.equal(new URL(v.url).hostname,'urplay.se');
});
test('text selection explains relevance to the question and distinguishes construction detail',()=>{
 const correct=STUDY_TEXT_PRACTICE.sentences.flatMap((s,i)=>s.important?[i]:[]);
 assert.deepEqual(correct,[0,1,3]);
 assert.ok(studySelectionFeedback(correct).every(r=>r.appropriate));
 assert.equal(studySelectionFeedback([2])[2].appropriate,false);
 assert.match(studySelectionFeedback([2])[2].why,/hur vägar byggdes/);
 assert.equal(studySelectionFeedback([0,0,1,3]).length,4);
 const html=renderStudyExtras(STUDY_LESSONS.find(l=>l.id==='study-text'));
 assert.match(html,/Ingen automatisk bedömning/);assert.match(html,/sparas inte/);
});
