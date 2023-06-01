
function load (){
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjI2ZmY0MWU1MDcxZTI4ODVlMTVmY2I1NzBjZWU3NyIsInN1YiI6IjY0NzMzNTllOTQwOGVjMDEzZTgwYmJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Se0oGVi6M6hb-s2oVOCFCVIHUoG1ovbyk28gWqik2Sk'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d226ff41e5071e2885e15fcb570cee77&language=ko', options)
    .then(response => response.json())
    .then(data => {
        let rows = data['results']
        // api로 받아온 데이터 중 results 객체를 row라는 식별자로 저장해줍니다.
        let rank_array = []
        // 순위 랭크를 가져올 빈 배열을 생성해 줍니다.
        document.getElementById("items").innerHTML = ""
        // 객체의 요소들을 가져오기 전에 dom 요소 중 items를 innerHTML = ""를 통해 items의 하위요소들을 모두 삭제해줍니다.

        
        rows.forEach((info) => {
            let id = info['id']
            let title = info['title']
            let poster_path = "https://image.tmdb.org/t/p/w300" + info['poster_path']
            let vote_average = info['vote_average']
            let comment = info['overview']
            rank_array.push(id)
            let rank = rank_array.indexOf(id) + 1

            let temp = `
                            <div class="item" onclick='alert("영화 ID : ${id}")' id="movieinfo">
                            <div class="comment" style="position: absolute; z-index: 2;">${comment}</div>
                               <div class ="movieposter">
                                <img src ="${poster_path}" class="cardimg">
                                <span class="rank">${rank}</span>
                                </div>
                                <div class="tbox">
                                <div class="title">${title}</div>
                                <div class="star">🌟    ${vote_average}</div>
                                </div>
                             </div>`

                            //  ${}는 jquery와 헷갈릴 수 있으나 es6에서 추가된 js문법입니다.
            document.getElementById("items").insertAdjacentHTML('beforeend', temp);



        })
    })


    // dom 객체인 searchinput을 가져온 후  enter키 조작시 
    // 검색 버튼을 마우스로 눌러주는 것과 같은 이벤트를 실행하도록 만들었습니다.
    document.getElementById("searchinput")
    .addEventListener("keyup", function (e) {
        e.preventDefault();
        if (e.keycode === 'Enter') {
        document.getElementById("searchbtn").click();
         
        }
    })

}

