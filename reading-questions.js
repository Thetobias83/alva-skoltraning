import {LESSONS} from './lessons.js?v=20261030-reading1';
const readingChapters=LESSONS.filter(l=>l.id.startsWith('reading-')||l.id.startsWith('knowledge-')||['Matematik','Kemi'].includes(l.subject)||l.id==='history-basics');
// Vocabulary checks support each chapter; open self-explanations cover deeper reasoning.
export const READING_QUESTIONS=readingChapters.flatMap((l,index)=>(l.id==='history-basics'?['Källor']:l.topics).map((topic,topicIndex)=>{
 const [word,meaning]=l.terms[0];
 const candidates=[...l.terms.slice(1),...readingChapters.filter(other=>other.subject===l.subject&&other.id!==l.id).flatMap(other=>other.terms)];
 const wrong=[...new Set(candidates.filter(([name,text])=>name!==word&&text!==meaning).map(([,text])=>text))].slice(0,2);
 const a=[meaning,...wrong],c=index%a.length;if(c)[a[0],a[c]]=[a[c],a[0]];
 return {id:`reading-check-${l.id}-${topicIndex}`,s:l.subject,t:topic,lessonId:l.id,l:1,q:`Vad menas med ”${word}” i det här ämnesavsnittet?`,a,c,e:`${word}: ${meaning} ${l.intro}`};
}));
