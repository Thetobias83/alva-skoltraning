import test from 'node:test';
import assert from 'node:assert/strict';
import {LESSONS,MOLECULES,lessonsFor,lessonForQuestion} from '../lessons.js';
import {BANK,SUBJECTS} from '../data.js';
test('every subject has a plain-language lesson with example, misconception and self explanation',()=>{
 const ids=new Set();for(const s of Object.keys(SUBJECTS))assert.ok(lessonsFor(s).length,s);
 for(const l of LESSONS){assert.ok(!ids.has(l.id));ids.add(l.id);assert.ok(SUBJECTS[l.subject]);assert.ok(l.intro&&l.title&&l.example&&l.mistake&&l.recall&&l.answer);assert.ok(l.paragraphs.length>=2);assert.ok(l.terms.length>=1);}
});
test('every exercise links to a lesson in its own subject',()=>{
 for(const q of BANK){const l=lessonForQuestion(q);assert.ok(l,q.id);assert.equal(l.subject,q.s);}
 assert.equal(lessonForQuestion({s:'Kemi',t:'Atomer',q:'Vad består en vattenmolekyl av?'}).id,'chem-molecules');
 assert.equal(lessonForQuestion({s:'Kemi',t:'Atomer',q:'Vad kännetecknar ett grundämne?'}).id,'chem-elements');
 assert.equal(lessonForQuestion({s:'Matematik',t:'Bråk',q:''}).id,'math-fractions');
});
test('molecular model distinguishes number of atoms from number of elements',()=>{
 assert.equal(MOLECULES.O2.atoms.length,2);assert.equal(new Set(MOLECULES.O2.atoms).size,1);assert.equal(MOLECULES.O2.kind,'Grundämne');
 assert.equal(MOLECULES.H2O.atoms.length,3);assert.equal(new Set(MOLECULES.H2O.atoms).size,2);assert.equal(MOLECULES.H2O.kind,'Kemisk förening');
 for(const m of Object.values(MOLECULES)){assert.ok(m.atoms.every(a=>['H','O','C'].includes(a)));assert.ok(m.explanation);}
});
