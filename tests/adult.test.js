import test from 'node:test';
import assert from 'node:assert/strict';
import {ADULT_LESSONS,ADULT_QUESTIONS,ADULT_SOURCES,ADULT_CHECKED} from '../adult-knowledge.js';
import {hypotheticalGrowth,adultBudget,renderAdultExtras} from '../adult-ui.js';
import {BANK,SUBJECTS} from '../data.js';
import {lessonForQuestion,LESSONS} from '../lessons.js';
import {curriculumSummary} from '../curriculum-guide.js';

test('adult knowledge has relevant practice and dated sources for every chapter',()=>{
 assert.equal(ADULT_LESSONS.length,17);assert.equal(ADULT_QUESTIONS.length,17);
 assert.equal(ADULT_CHECKED,'2026-11-02');assert.equal(curriculumSummary('Vuxenkunskap'),'');
 for(const l of ADULT_LESSONS){
  assert.ok(SUBJECTS.Vuxenkunskap.topics.includes(l.topics[0]));
  assert.equal(l.paragraphs.length,3);assert.ok(l.sources.length);assert.equal(l.steps.length,3);
  for(const key of l.sources){assert.ok(ADULT_SOURCES[key],key);assert.equal(new URL(ADULT_SOURCES[key].url).protocol,'https:');}
  const qs=BANK.filter(q=>q.lessonId===l.id);assert.equal(qs.length,2,l.id);
  for(const q of qs)assert.equal(lessonForQuestion(q).id,l.id);
  assert.match(renderAdultExtras(l),/2 november 2026/);
 }
});
test('financial teaching distinguishes models from guarantees and preserves dated protection amount',()=>{
 const find=id=>ADULT_LESSONS.find(l=>l.id==='adult-'+id);
 assert.match(find('risk').paragraphs.join(' '),/1 150 000 kr per person och institut/);
 assert.match(find('risk').paragraphs.join(' '),/Garantin täcker inte börsfall/);
 assert.match(find('accounts').paragraphs.join(' '),/ingen fast ISK-skattesats/);
 assert.match(find('declaration').mistake,/inte automatiskt/);
 assert.match(find('compound').mistake,/inte en prognos/);
});
test('hypothetical financial calculators handle losses, deficits and invalid input',()=>{
 assert.equal(adultBudget(12000,7000,3500),1500);assert.equal(adultBudget(100,80,30),-10);
 assert.equal(adultBudget(NaN,0,0),null);assert.equal(adultBudget(10,-1,0),null);
 assert.ok(Math.abs(hypotheticalGrowth(1000,5,2)-1102.5)<1e-8);
 assert.equal(hypotheticalGrowth(1000,-100,1),0);
 assert.equal(hypotheticalGrowth(1000,0,2),1000);
 for(const args of [[1000,Infinity,2],[1000,5,1.5],[1000,5,0],[-1,5,2],[1000,31,2]])assert.equal(hypotheticalGrowth(...args),null);
});
test('Roman explanation includes interruption of Byzantine control in Constantinople',()=>{
 const text=LESSONS.find(l=>l.id==='rome-change').paragraphs.join(' ');
 assert.match(text,/1204/);assert.match(text,/1261/);
 assert.match(BANK.find(q=>q.id==='rome-q-20').e,/1204–1261/);
});
