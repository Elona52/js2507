// 사용자로부터 입장객과 한 줄당 인원수를 입력 받기
let memNum = parseInt(prompt("입장객은 몇 명인가요? (숫자로 입력하세요)")); // 총 입장객 수
let colNum = parseInt(prompt("한 줄에 몇 명씩 앉습니까? (숫자로 입력하세요)")); // 한 줄의 최대 좌석 개수

// 입력값 유효성 검사
if (isNaN(memNum) || isNaN(colNum) || memNum <= 0 || colNum <= 0) {
    alert("입력값이 잘못되었습니다. 숫자로 올바르게 입력해주세요."); // 잘못된 입력에 대한 경고
} else {
    // **1. 행(row), 열(column), 좌석번호 계산**:
    let rowNum = Math.ceil(memNum / colNum); // 필요한 행의 개수 계산
    let seatNumbers = []; // 좌석 번호 저장 배열

    for (let i = 0; i < rowNum; i++) { // 행 반복
        for (let j = 1; j <= colNum; j++) { // 열 반복
            let seatNo = i * colNum + j; // 좌석 번호 계산
            if (seatNo > memNum) break; // 총 좌석 수 초과 시 중지
            seatNumbers.push(seatNo); // 좌석 번호 배열에 저장
        }
    }

    // **3. 테이블 형태로 출력**:
    document.writeln('<table border="1" style="border-collapse: collapse; text-align: center; width: 50%;">'); // 테이블 시작
    let seatIndex = 0; // seatNumbers 배열의 인덱스 초기화

    for (let i = 0; i < rowNum; i++) { // 행 반복
        document.writeln('<tr>'); // 행 생성

        for (let j = 1; j <= colNum; j++) { // 열 반복
            if (seatIndex >= seatNumbers.length) {
                document.writeln('<td style="padding: 10px;"> </td>'); // 빈 좌석 출력
            } else {
                document.writeln(`<td style="padding: 10px;">좌석 ${seatNumbers[seatIndex]}</td>`); // 좌석 번호 출력
                seatIndex++; // 다음 좌석 이동
            }
        }

        document.writeln('</tr>'); // 행 종료
    }

    document.writeln('</table>'); // 테이블 종료
}