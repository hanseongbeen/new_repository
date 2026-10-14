$(document).ready(function () {
  //고양이랑 풀숲 배경 조정해보기
  $(document).on("mousemove", function (event) {
    // 1. 마우스 이동에 따라 배경 이미지의 위치 움직이게 하기
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);

    // 2. 마우스 커서에 고양이 이미지 따라다니게 하기
    let imgWidth = $(".cat-img").width();
    let imgHeight = $(".cat-img").height();

    // 2-1. 변수에 값을 할당할 때, 이미지 너비를 미리 2로 나눠서 적용하거나
    // let imgWidth = $(".cat-img").width() / 2;
    // let imgHeight = $(".cat-img").height() / 2;

    //이미지의 left, top 값의 변화를 위에서 선언한 mouse X,Y 좌표값을 가져와서 적용함
    // $(".cat-img").css("left", mouseX - imgWidth + "px");
    // $(".cat-img").css("top", mouseY - imgHeight + "px");

    // 2-2. 이미지의 position 값을 적용할때, 고양이 이미지의 절반을 계산해서 넣거나
    // 상황에 따라 선택해서 적용할 수 있다.
    // 이미지의 left, top 값을 가로세로 절반만큼 빼면, 우리가 가지고 있는 커서의 위치(mouseX,Y)에서
    // 이미지 가로세로의 절반씩 좌표가 수정되어서 커서 위치에 이미지의 중심이 오도록 적용된다.
    $(".cat-img").css("left", mouseX - imgWidth / 2 + "px");
    $(".cat-img").css("top", mouseY - imgHeight / 2 + "px");
  });
});
