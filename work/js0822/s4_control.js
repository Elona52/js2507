// let r4 = document.querySelector("#result4");

// r4.innerHTML = "=== 동기방식 ===<br>";
// r4.innerHTML += "A.라면 장보기 <br>";
// r4.innerHTML += "B.물 끓이기 br>";
// r4.innerHTML += "C.끓는 물에 라면 스프 넣고 익히기 <br>";
// r4.innerHTML += "D.완성 <br>";

// // 비동기 예시
// r4.innerHTML += "=== 비동기 방식 ===<br>";


// const 라면_장보기 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         r4.innerHTML += 'A. 라면 장보기<br>';
//         r4.innerHTML += 'B. 라면 물 끓이기<br>';
//         resolve('라면 장보기 완료');
//     }, 1000);
// });

// 라면_장보기
//     .then((result) => {
//         r4.innerHTML += result + '<br>';
//         r4.innerHTML += 'C. 끓는 물에 라면, 스프 넣고 익히기<br>';
//         r4.innerHTML += 'D. 라면 완성 후 시식하기<br>';
//     })
//     .catch((error) => {
//         r4.innerHTML += error + '<br>';
//         r4.innerHTML += '라면 만들기 중단<br>';
//         r4.innerHTML += '======================';
//     });

// const 커피_장보기 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         r4.innerHTML += '==1초후==<br>';
//         r4.innerHTML += 'E. 커피 장보기<br>';
//         r4.innerHTML += 'F. 커피 물 끓이기<br>';
//         reject('커피 품절');
//     }, 1000);
// });

// 커피_장보기
//     .then((result) => {
//         r4.innerHTML += 'G. 끓는 물에 커피 넣고, 젓기<br>';
//         r4.innerHTML += 'H. 커피 완성 후 마시기<br>';
//     })
//     .catch((error) => {
//         r4.innerHTML += error + '<br>';
//         r4.innerHTML += '커피 만들기 중단<br>';
//     });

// const 파스타_장보기 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         r4.innerHTML += '==6초후==<br>';
//         r4.innerHTML += '파스타 결과 없음(panding): 성공도 실패도 아님<br>';
//         // resolve/reject 호출 안함 → pending 상태 유지
//     }, 6000);
// });

// setTimeout(() => {
//     r4.innerHTML += '==7초후==<br>';
//     r4.innerHTML += "라면_장보기, 커피_장보기, 파스타_장보기 상태 출력 완료<br>";
// }, 7000);

//사용2================================================================================

//라면 장보기 성공일 경우
const 라면_장보기 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('A. 라면 장보기');
        console.log('B. 라면 물 끓이기');
        resolve('라면 장보기 완료');
    }, 1000);
});

const 커피_장보기 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('A. 라면 장보기');
        console.log('B. 라면 물 끓이기');
        resolve('라면 장보기 완료');
    }, 500);
});

const 약속배려함수 = async () => {
    try {
        const result = await 라면_장보기()
        console.log(result)
        console.log('C.')
        console.log('D.라면 완성 후 시식하기')
    } catch (result) {
        console.log(result)
        console.log('라면 만들기 중단')
        return

    }
    try {
        const result = await 커피_장보기();
        console.log('G 끓는 물에 커피 넣고, 젓기')
        console.log('H.커피 완성 후 마시기')
    } catch (result) {
        console.log(result)
        console.log('커피 만들기 중단')
    }
}

//약속배려함수();

//사용3=====================================================
const API_URL = "https://jsonplaceholder.typicode.com/users";

function getFetchUsers() {
  console.log("Fetching Load Data...");

  fetch(API_URL)
  .then((response) => {
    console.log(response.status);
    if (!response.ok) {
      throw new Error(`응답오류! 상태: ${response.status}`);
    }
    return response.json();
  })
  .then((users) => {
    users.slice(0,3).forEach((user, index) => {
      console.log(`${index + 1} ${user.name} (${user.email})`);
    });
  })
  .catch((error) => {
    // 네트워크 또는 처리 오류시 실행
    console.error("Error fetching users:", error.message);
  });
}

getFetchUsers();