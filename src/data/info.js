export const TEAM = {
  university: '멋쟁이사자처럼 동국대학교',
  hackathon: '중앙해커톤',
  number: 2,
  name: 'MCM',
  slogan: 'Mapping Custom Moment',
};

export const MEMBERS = [
  { name: '이소이', role: 'PM'},
  { name: '유설희', role: 'Frontend'},
  { name: '이희수', role: 'Frontend'},
  { name: '구교현', role: 'Backend'}, 
  { name: '권현서', role: 'Backend'}, 
  { name: '임예진', role: 'Backend'}, 
];

export const PROJECT = {
  title: 'MCM',
  problem: `백화점 명품관 팝업 공간을 찾은 방문객이 원하는 국가 배경을 고르고 사진 또는 짧은 영상을 촬영하면, OpenAI 합성 API가 선택한 MCM 제품을 그 위에 합성해 오픈채팅 스타일의 메시지로 보여주는 체험형 리브랜딩 캠페인. 전화번호로 결과 영상을 받고, 그 번호를 기준으로 나만의 '여정 지도'가 쌓여 시즌마다 새로 열리는 팝업을 다시 찾아올 이유가 생긴다.`,
};

export const FEATURES = [
  { title: '오픈채팅 스타일 대화형 UI', detail: '카카오톡 오픈채팅에서 흔히 보는 채팅 버블·프로필 아이콘 컨벤션을 자체 웹앱에 구현한 것으로, 실제 카카오 플랫폼과의 API 연동은 아니다. 고객에게 익숙한 UI 문법을 그대로 가져와 별도 학습 없이 바로 이해되는 인터페이스를 만드는 것이 목적.카카오톡 오픈채팅에서 흔히 보는 채팅 버블·프로필 아이콘 컨벤션을 자체 웹앱에 구현한 것으로, 실제 카카오 플랫폼과의 API 연동은 아니다. 고객에게 익숙한 UI 문법을 그대로 가져와 별도 학습 없이 바로 이해되는 인터페이스를 만드는 것이 목적.' }, // TODO
  { title: '촬영 기반 OpenAI 합성', detail: '실시간 프레임 단위 처리 대신, 고객이 국가 배경을 고르고 사진 또는 짧은 영상을 1컷 촬영하면 그 결과물을 OpenAI 합성(이미지/영상 편집) API에 전달해 선택한 제품과 배경을 합성한다. 실시간 CV 파이프라인이 없어 프론트엔드 구현 부담이 크게 줄고, 처리 대기 시간은 채팅 UI의 "입력 중..." 연출로 자연스럽게 채운다.' }, // TODO
  { title: '세션당 최대 3회 반복 체험', detail: '한 세션에서 서로 다른 제품·국가 조합으로 최대 3개의 결과물을 받을 수 있다. 첫 결과물을 받은 뒤 "다른 가방도 보시겠어요?" 같은 제안을 채팅 메시지로 이어붙여 반복 체험을 유도한다.' }, // TODO
];

export const STACK = ['React', 'Vite', 'React Router', 'JavaScript'];
