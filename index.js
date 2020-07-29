
// 0으로 초기화된 size가 n x n인 배열 생성 (n은 default 10)
function generateTwoDemension(n = 10) {
    return Array.apply(null, Array(n)).map(() =>
        Array.apply(null, Array(n)).map(() => 0)
    );
}

   // {size}개의 random mine 좌표 (기본 10개)
function generateMineXY(size = 10, num = 10) {
    const list = [];

    while (list.length < num) {
        const x = Math.floor(Math.random() * size);
        const y = Math.floor(Math.random() * size);

        // 중복 검사 후 없는 경우 push
        list.find(item => item.x === x && item.y === y) || list.push({ x, y });
    }
    return list;
}

// 마인 주위의 좌표 모음
const check = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], /*[0, 0],*/[0, 1],
    [1, -1], [1, 0], [1, 1],
];

// 지뢰가 추가된 map 생성 함수
function getMineMap() {
    const book = generateTwoDemension();
    const mine = generateMineXY();
    
    // 지뢰의 좌표들을 반복하여 검사
    mine.forEach(item => {
        const { x, y } = item;

        // 지뢰 세팅
        book[x][y] = '*';

        // 지뢰 주위의 숫자 1씩 증가
        check.forEach(xy => {
            const newX = x + xy[0];
            const newY = y + xy[1];

            // Map을 넘어가거나 지뢰인 경우 카운팅 제외
            newX >= 0 && newX < 10
                && newY >= 0 && newY < 10
                && book[newX][newY] !== '*' && book[newX][newY]++;
        });
    });

    return book;
}