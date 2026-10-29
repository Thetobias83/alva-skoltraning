import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,validCourseProgress,layerCount} from '../courses.js';
import {REFERENCES} from '../references.js';
import {LESSONS} from '../lessons.js';
test('imported course progress discards unknown units and duplicate completions',()=>{
 assert.deepEqual(validCourseProgress({cpp:['hello','fake'],print:['layers','layers','fake'],ai:['verify'],unknown:['x']}),{cpp:['hello'],print:['layers'],ai:['verify']});
 assert.deepEqual(validCourseProgress(null),{});
 assert.deepEqual(validCourseProgress({print:'layers'}),{cpp:[],print:[],ai:[]});
});
test('layer calculator rounds partial layers up and rejects invalid inputs',()=>{
 assert.equal(layerCount(20,.2),100);assert.equal(layerCount(20,.3),67);assert.equal(layerCount(0,.2),null);assert.equal(layerCount(20,0),null);assert.equal(layerCount(NaN,.2),null);
});
test('every lesson subject and course has further reading, all links are secure',()=>{
 for(const subject of new Set([...LESSONS.map(l=>l.subject),...COURSES.map(c=>c.subject)]))assert.ok(REFERENCES.some(r=>r.subject===subject),subject);
 for(const r of REFERENCES){assert.equal(new URL(r.url).protocol,'https:');assert.ok(r.provider&&r.description&&r.language);}
});
test('course checkpoints have unique IDs and a valid correct answer',()=>{
 assert.equal(COURSES.length,3);
 for(const c of COURSES){assert.equal(c.units.length,6);assert.equal(new Set(c.units.map(u=>u.id)).size,c.units.length);for(const u of c.units){assert.ok(u.options[u.answer]);assert.ok(u.task&&u.explanation);}}
});
