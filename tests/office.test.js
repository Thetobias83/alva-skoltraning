import test from 'node:test';
import assert from 'node:assert/strict';
import {OFFICE_COURSES,OFFICE_DATA,officeCsv,officeBudgetTotal} from '../office-courses.js';
import {renderOfficeExtras,OFFICE_HELP} from '../office-ui.js';
import {validCourseProgress} from '../courses.js';

test('Office progresses through three levels with practical steps and checkpoints in each application',()=>{
 assert.deepEqual(OFFICE_COURSES.map(c=>c.subject),['Word','Excel','PowerPoint']);
 for(const c of OFFICE_COURSES){
  for(const level of [1,2,3])assert.equal(c.units.filter(u=>u.level===level).length,3);
  assert.equal(c.units.at(-1).id,'project');
  for(const u of c.units){
   assert.equal(u.steps.length,4);assert.equal(u.checks.length,2);
   assert.equal(new Set(u.options).size,3);assert.ok(u.options[u.answer]);
   assert.match(renderOfficeExtras(c,u),/själva programmet körs inte/);
  }
  assert.equal(new URL(OFFICE_HELP[c.subject].video).hostname,'support.microsoft.com');
 }
});
test('downloadable exercise data agrees with formula and pivot control totals',()=>{
 const csv=officeCsv();assert.ok(csv.startsWith('\uFEFFVara;Kategori;Antal;Styckpris'));
 assert.equal(csv.split('\r\n').length,7);
 assert.ok(OFFICE_DATA.slice(1).every(r=>r.length===4&&typeof r[2]==='number'&&typeof r[3]==='number'));
 assert.equal(officeBudgetTotal(),195);
 const sum=category=>OFFICE_DATA.slice(1).filter(r=>r[1]===category).reduce((s,r)=>s+r[2]*r[3],0);
 assert.equal(sum('Frukt'),73);assert.equal(sum('Skolmaterial'),122);
 assert.equal(officeBudgetTotal()*.9,175.5);
});
test('course import retains Office and previous progress while excluding unknown units',()=>{
 const clean=validCourseProgress({'office-word':['first','first','fake'],'office-excel':['pivot'],cpp:['hello'],print:['layers'],ai:['verify']});
 assert.deepEqual(clean['office-word'],['first']);assert.deepEqual(clean['office-excel'],['pivot']);
 assert.deepEqual(clean.cpp,['hello']);assert.deepEqual(clean.print,['layers']);assert.deepEqual(clean.ai,['verify']);
});
