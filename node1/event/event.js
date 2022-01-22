const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});
myEvent.on('event2', () => {
    console.log('이벤트 2');
});
myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
});
myEvent.once('event3', () => {
    console.log('이벤트 3');
});

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', () => {
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
    console.log('이벤트 5');
};

myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));

/*
    event 모듈
     - on(이벤트명, 콜백) : 이벤트 이름과 이벤트 발생 시의 콜백을 연결합니다. 하나의 여러 이벤트를 달 수도 있습니다.
     - addListener(이벤트명, 콜백) : on과 기능이 같습니다.
     - emit(이벤트명) : 이벤트를 호출하는 메서드입니다.
     - removeAllListeners(이벤트명) : 이벤트에 연결된 모든 이벤트 리스너를 제거합니다.
     - removeListener(이벤트명, 리스너) : 이벤트에 연결된 리스너를 하나씩 제거합니다.
     - off(이벤트명, 콜백) : 노드 10버전에 추가된 메서드, removeListener와 기능이 같습니다.
     - listenerCount(이벤트명) : 현재 리스너가 몇 개 연결되어 있는지 확인합니다.
*/