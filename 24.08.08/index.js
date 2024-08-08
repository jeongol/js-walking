const apiUrl = 'https://jsonplaceholder.typicode.com/comments';

const button = document.querySelector(".showBtn");
button.addEventListener("click", fetchComments);

async function fetchComments() {
    try {
        // API 호출
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error( "오류" + response.statusText);
        }
        const comments = await response.json();
        console.log(comments);

        // slice 메서드를 활용하여 0번째부터 9번째 값까지 복사한 새로운 배열 만들기
        let slicedData = comments.slice(0, 10);
        const commentsDiv = document.getElementById("comments");

        slicedData.forEach((comment) => {


            // comment의 body의 길이가 40 이상일 때 0번째부터 39번째 문자를 복사하고 맨 뒤에 "..."을 붙인 문자열을 할당
            let slicedBody = comment.body.length >= 40 ? comment.body.slice(0, 40) + "..." : comment.body;

            
            // 각 comment를 DOM에 추가
            const commentElement = document.createElement("div");
            commentElement.innerHTML = `
                <h2>${slicedBody}</h2>
                <p>사용자 이름: ${comment.name}</p>
                <p>이메일: ${comment.email}</p>
            `;
            commentsDiv.appendChild(commentElement);
        });
    } catch (error) {
        console.error("오류:", error);
    }
}