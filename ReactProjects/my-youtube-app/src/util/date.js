import {format, register} from 'timeago.js';
// format : 몇분전, 몇시간전 표기
// register : 원하는 국가 언어 적용
import koLocale from 'timeago.js/lib/lang/ko';

// formatAgo 함수에서 lang에 'ko'를 받으면 한국어로 적용, default는 영어:'en_US'
register('ko', koLocale); 

export function formatAgo(date, lang = 'en_US'){
    return format(date, lang);
};
