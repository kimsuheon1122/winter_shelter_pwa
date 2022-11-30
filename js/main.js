/* 긴급신고 move_in, move_out */
$(".help").click(function(){
    $(".warning_ment").removeClass("move_out_down");
    $(".warning_ment").addClass("move_in_up");
});
$(".home_top").click(function(){
    $(".warning_ment").removeClass("move_in_up");
    $(".warning_ment").addClass("move_out_down");
});
/* 쉼터유형 move_in, move_out */
$(".shelter_type_page").click(function(){
    $("#shelter_type_page").removeClass("shelter_move_out_right");
    $("#shelter_type_page").addClass("shelter_move_in_left");
});
/* 계절별 옷차림 move_in, move_out */
$(".temp_cloth_page").click(function(){
    $("#temp_cloth_page").removeClass("cloth_move_out_right");
    $("#temp_cloth_page").addClass("cloth_move_in_left");
});
/* AED move_in, move_out */
$(".serch_for_AED_page").click(function(){
    $("#serch_for_AED_page").removeClass("AED_move_out_right");
    $("#serch_for_AED_page").addClass("AED_move_in_left");
});
/*  지도로 쉼터 찾기 move_in, move_out*/
$(".map_page ,.near_move").click(function(){
    $("#map_page").removeClass("map_move_out_bottom");
    $("#map_page").addClass("map_move_in_top");
});
/* 동리스트 move_in, move_out */
$(".location_bar, .shelter_list_dong").click(function(){
    $("#map_page").addClass("map_move_out_bottom");
    $("#location_list_page").removeClass("location_list_move_out_bottom");
    $("#location_list_page").addClass("location_list_move_in_top");
    $("#shelter_list_detail").removeClass("shelter_list_detail_move_in_top");
    $("#shelter_list_detail").addClass("shelter_list_detail_move_out_bottom");
});
/* 따숨소 리스트 move_in, move_out */
$(".location_count_bar, .dong_search_bar span, .dong_search_bar i").click(function(){
    $("#map_page").removeClass("map_move_in_top");
    $("#map_page").addClass("map_move_out_bottom");
    $("#location_list_page").removeClass("location_list_move_in_top");
    $("#location_list_page").addClass("location_list_move_out_bottom");
    $("#shelter_list_detail").removeClass("shelter_list_detail_move_out_bottom");
    $("#shelter_list_detail").addClass("shelter_list_detail_move_in_top");
})
/* cover 쉼터를 찾는 중...효과 + mouseover시 cover diplay:hidden*/
const elTypingSpan = document.querySelector("#cover_popup span");
let num = 0;
let intro = "쉼터를 찾는 중...";

function typing(){
    if(num>=intro.length){
        elTypingSpan.textContent = "";
        num = 0;
    }
    elTypingSpan.textContent = elTypingSpan.textContent + intro[num];
    num++
}

let interval = setInterval(function(){
    typing();
},200)
$(".popup_logo").mouseover(function(){
    $("#cover_popup").addClass("display_hidden");
    clearInterval(interval);
})
/* 홈으로 돌아가기 */
$(".logo_bar img,.logo_bar span").click(function(){
    $("#shelter_type_page").removeClass("shelter_move_in_left");
    $("#shelter_type_page").addClass("shelter_move_out_right");
    $("#temp_cloth_page").removeClass("cloth_move_in_left");
    $("#temp_cloth_page").addClass("cloth_move_out_right");
    $("#serch_for_AED_page").removeClass("AED_move_in_left");
    $("#serch_for_AED_page").addClass("AED_move_out_right");
    $("#map_page").removeClass("map_move_in_top");
    $("#map_page").addClass("map_move_out_bottom");
    $("#location_list_page").removeClass("location_list_move_in_top");
    $("#location_list_page").addClass("location_list_move_out_bottom");
    $("#shelter_list_detail").removeClass("shelter_list_detail_move_in_top");
    $("#shelter_list_detail").addClass("shelter_list_detail_move_out_bottom");
    $('#auto_maker').children().remove();
});
/* 현재시간 불러오기 */
let today = new Date();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
$(".home_top_bottom span").html(hours + ":" + minutes + ":" + seconds )
/* 따숨소 검색엔진 - 검색결과로 패스*/
function inputSearch(){
    const inputValue = document.querySelector("#search");
    let inputFilterArray = [];
    console.log("입력 : ", inputValue.value);
    inputFilterArray = addObject["DATA"].filter(item=>
        (item["r_detl_add"].includes(inputValue.value)||item["r_area_nm"].includes(inputValue.value)));
    fillHtmlList(inputFilterArray);
    $(".shelter_list_dong span").html(`${inputValue.value} 검색결과`);
    $("#shelter_list_detail").removeClass("shelter_list_detail_move_out_bottom");
    $("#shelter_list_detail").addClass("shelter_list_detail_move_in_top");
    $('#auto_maker').children().remove();
    return false;
}
/*  따숨소 검색엔진 - 검색어자동완성*/
var ref = [
    {key:1, name:"개포동"},
    {key:2, name:"논현동"},
    {key:3, name:"대치동"},
    {key:4, name:"도곡동"},
    {key:5, name:"삼성동"},
    {key:6, name:"세곡동"},
    {key:7, name:"수서동"},
    {key:8, name:"신사동"},
    {key:9, name:"압구정동"},
    {key:10, name:"역삼동"},
    {key:11, name:"율현동"},
    {key:12, name:"일원동"},
    {key:13, name:"자곡동"},
    {key:14, name:"청담동"},
    {key:15, name:"능인종합사회복지관"},
    {key:16, name:"대치2단지아파트경로당"},
    {key:17, name:"강남종합사회복지관"},
    {key:18, name:"개포4동주민센터"},
    {key:19, name:"포이경로당"},
    {key:20, name:"일원2동주민센터"},
    {key:21, name:"밀미리경로당"},
    {key:22, name:"개포경로당"},
    {key:23, name:"개포2동주민센터"},
    {key:24, name:"경남아파트 경로당"},
    {key:25, name:"개포1동주민센터"},
    {key:26, name:"논현2동주민센터"},
    {key:27, name:"논현노인종합사회복지관"},
    {key:28, name:"논현1동주민센터"},
    {key:29, name:"논현경로당"},
    {key:30, name:"영동경로당"},
    {key:31, name:"한마음경로당"},
    {key:32, name:"래미안대치팰리스1단지 경로당"},
    {key:33, name:"은마경로당"},
    {key:34, name:"우성(아)경로당"},
    {key:35, name:"선경(아)경로당"},
    {key:36, name:"대치1동주민센터"},
    {key:37, name:"한티경로당"},
    {key:38, name:"대치노인복지센터"},
    {key:39, name:"대치4동주민센터"},
    {key:40, name:"대치4경로당"},
    {key:41, name:"대치경로당"},
    {key:42, name:"대치2동주민센터"},
    {key:43, name:"강남70+라운지"},
    {key:44, name:"도곡구립경로당"},
    {key:45, name:"도곡2동주민센터"},
    {key:46, name:"개포한신(아)경로당"},
    {key:47, name:"개포우성4차경로당"},
    {key:48, name:"개포4차우성경로당"},
    {key:49, name:"대림아크로빌경로당"},
    {key:50, name:"도곡1동주민센터"},
    {key:51, name:"삼성래미안경로당"},
    {key:52, name:"도곡1경로당"},
    {key:53, name:"삼성경로당"},
    {key:54, name:"봉전경로당"},
    {key:55, name:"삼성1동주민센터"},
    {key:56, name:"삼성2동주민센터"},
    {key:57, name:"힐스테이트2단지(아)경로당"},
    {key:58, name:"강남노인종합복지관"},
    {key:59, name:"윗반고개 경로당"},
    {key:60, name:"반고개 경로당"},
    {key:61, name:"수서3단지경로당"},
    {key:62, name:"수서명화종합사회복지관"},
    {key:63, name:"수서동주민센터"},
    {key:64, name:"미미위강남세움센터"},
    {key:65, name:"수서종합사회복지관"},
    {key:66, name:"수서7단지경로당"},
    {key:67, name:"태화기독교사회복지관"},
    {key:68, name:"수서10단지경로당"},
    {key:69, name:"학수정경로당"},
    {key:70, name:"신사동주민센터"},
    {key:71, name:"압구정1동 경로당"},
    {key:72, name:"압구정노인복지센터"},
    {key:73, name:"압구정복지센터경로당"},
    {key:74, name:"로데오현대(아)경로당"},
    {key:75, name:"미성2차아파트경로당"},
    {key:76, name:"압구정동주민센터"},
    {key:77, name:"현대(아)경로당"},
    {key:78, name:"상방교경로당"},
    {key:79, name:"강남시니어플라자"},
    {key:80, name:"테헤란아아파크실버클럽"},
    {key:81, name:"하방교경로당"},
    {key:82, name:"역삼복지경로당"},
    {key:83, name:"역삼2동주민센터"},
    {key:84, name:"역삼2동경로당"},
    {key:85, name:"역삼1동주민센터"},
    {key:86, name:"방죽2경로당"},
    {key:87, name:"세곡동주민센터"},
    {key:88, name:"방죽1시니어센터"},
    {key:89, name:"우성7차아파트경로당"},
    {key:90, name:"대청경로당"},
    {key:91, name:"제1경로당"},
    {key:92, name:"대청종합사회복지관"},
    {key:93, name:"일원1동주민센터"},
    {key:94, name:"일원경로당"},
    {key:95, name:"일원본동주민센터"},
    {key:96, name:"청수경로당"},
    {key:97, name:"청담동주민센터"},
    {key:98, name:"청담래미안로이뷰경로당"},
    {key:99, name:"청담삼성1차경로당"},
    {key:100, name:"청담경로당"}
];
  var isComplete = false;  //auto_maker 자식이 선택 되었는지 여부
    $('#search').keyup(function(){
        var txt = $(this).val();
        if(txt != ''){  //빈줄이 들어오면
            $('#auto_maker').children().remove();
    
            ref.forEach(function(arg){
                if(arg.name.indexOf(txt) > -1 ){
                    $('#auto_maker').append($('<div>').text(arg.name).attr({'key':arg.key}));
                }
            });
            $('#auto_maker div').append($(`<i class="fa-solid fa-border-top-left"></i>`))	
            $('#auto_maker').children().each(function(){
                $(this).click(function(){
                    $('#search').val($(this).text());
                    $('#insert_target').val("key : "+$(this).attr('key')+ ", data : " + $(this).text());
                    $('#auto_maker').children().remove();
                    isComplete = true;
                });
            });			
        } else {
            $('#auto_maker').children().remove();
        }  
    });
/* 검색엔진에 focusing되면 돋보기도 함께 이동 */
$("#search").focus(function(){
    $("#form i").css("transform","translate(-40px,-250px)");
}
)
$("#search").focusout(function(){
    $("#form i").css("transform","translate(-40px, 0px)");
})
/* 온도별 옷차림 range 효과 */
var ror = document.getElementById("result_of_range");
var mor = document.getElementById("ment_of_range");
var cloth_img = document.getElementById("img_of_range");
var range = $("#temp_cloth_page input")

function ShowSliderValue(range_value){
    ror.innerHTML = range_value+"<span>ºC</span>";
    if(range_value>27){
        mor.innerHTML = "민소매, 반팔, 반바지 원피스, 샌들을(를) 입는 것이 좋습니다."
        cloth_img.setAttribute("src", "./img/summer.png")
    
    }else if(range_value>19){
        mor.innerHTML = "얇은 가디건, 긴팔, 면바지, 청바지을(를) 입는 것이 좋습니다."
        cloth_img.setAttribute("src", "./img/spring.png")
    
    }else if(range_value>8){
        mor.innerHTML = "자켓, 트렌치코트, 야상, 니트, 청바지(를) 입는 것이 좋습니다."
        cloth_img.setAttribute("src", "./img/fall_human.png")
    
    }
    else if(range_value>4){
        mor.innerHTML = "코트, 가죽자켓, 히트텍을,니트, 레깅스(를) 입는 것이 좋습니다."
        cloth_img.setAttribute("src", "./img/fall.png")
        
    }else{
        mor.innerHTML = "패딩, 두꺼운코트, 목도리, 기모제품을(를) 입는 것이 좋습니다."
        cloth_img.setAttribute("src", "./img/snowman.png")
    }
}
var RangeSlider = function(){
    range.on("input", function(){
        ShowSliderValue(this.value);
    })
}
RangeSlider();
/* location list page 요소 클릭시 검색창에 적용,
    지도로 보기에 적용 */
$(".dong_list li").click(function(){
    $(".dong_search_bar span, .look_for_map span").html(this.innerText);
})
/* 따숨소 목록 counting, ㅇㅇ동 지도로 보기 클릭시 해당 동 지도로 이동 */
let shelterCount = 0;
let detailItemArray = [];
$(".look_for_map, .map_page").click(function(){
    passArray();
    $(".location_count_bar span").html(shelterCount);
    shelterCount = 0;
    $(".location_bar span").html($(".look_for_map span").html());
    $("#map_page").removeClass("map_move_out_bottom");
    $("#map_page").addClass("map_move_in_top");
})
/* 따숨소 동 목록에서 동, 돋보기 누르면 리스트 펼침 */
$(".dong_search_bar span, .dong_search_bar i").click(function(){
    passArray();
    $(".shelter_list_dong span").html($(".dong_search_bar span").html());
    $("#shelter_list_detail").addClass("shelter_list_detail_move_in_top");
    $("#shelter_list_detail").removeClass("shelter_list_detail_move_out_bottom");
})
$(".location_count_bar").click(function(){
    $(".shelter_list_dong span").html($(".location_bar under_the_logo_bar span").html());
})
/* 따숨소 리스트로 선택한 객체를 보냄 */
function passArray(){
    subwayLat.map(item=>{
        if(item["add"] === $(".look_for_map span").html()){
            console.log("passArray : ", item["add"]);
            markMarker(item["Lat"], item["Long"]);
            console.log(item["Lat"], item["Long"]);
            addObject["DATA"].map(addItem=>{
                addItem["r_detl_add"].includes(item["add"]) ?
                (shelterCount = shelterCount + 1,
                detailItemArray.push(addItem)) :false
            })
            showShelterList(item["add"], detailItemArray);
            selectSorting(detailItemArray);
            detailItemArray = [];
        }
    })
    $("#location_list_page").removeClass("location_list_move_in_top");
    $("#location_list_page").addClass("location_list_move_out_bottom");
}
/* 해당 동의 shelter_list_detail page 불러오기 */
let elUl = document.querySelector(".shelter_list_detail ul");
function showShelterList(dong, detailItem){
/*     elUl.innerHTML = "";
 */
    console.log(dong, detailItem);
    $(".shelter_list_dong span").html(dong);

    fillHtmlList(detailItem);
}
let popupDetailItem = document.querySelector(".shelter_list_detail li");



/* shelter_detail_list html 채우는 js코드 */
function fillHtmlList(detailItem){
    console.log(detailItem.length);
    elUl.innerHTML = "";
    for(let i = 0; i<detailItem.length; i++){
        let elLi = document.createElement("li");
        let elH3 = document.createElement("h3");
        let elP = document.createElement("p");
        let elNight = document.createElement("span");
        let elArea = document.createElement("span");
        let elSquare = document.createElement("span");
        let elUse = document.createElement("span");
        let elHeat = document.createElement("span")
        let elHiddenDiv = document.createElement("div");
        let elToggleSpan = document.createElement("span");

        elUl.append(elLi);
        elLi.append(elH3,elP,elNight,elArea,elSquare,elHiddenDiv,elUse,elHeat,elToggleSpan);
        elH3.classList.add("shelter_name");
        elNight.classList.add("night");
        elArea.classList.add("area");
        elSquare.classList.add("square");
        elUse.classList.add("use", "display_hidden");
        elHeat.classList.add("heat", "display_hidden");
        elToggleSpan.classList.add("detail_toggle")
        elNight.innerHTML = `<i class="fa-solid fa-moon"></i>`
        elToggleSpan.innerHTML = "토";

        elH3.append(detailItem[i]["r_area_nm"]);
        elP.append(detailItem[i]["r_detl_add"]);
        elNight.append("야간개방여부 : ", detailItem[i]["chk3_yn"]);
        elArea.append(detailItem[i]["r_area_sqr"]);
        elSquare.append("m²");
        elUse.append("수용가능인원 : ",detailItem[i]["use_prnb"]);
        elHeat.append("난방기 수 : ",detailItem[i]["heat3_cnt"] )
    }
    detailItem = [];
    /* shelter_list_detail 요소 클릭하면 자세사항 보여줌 */
    $(".shelter_list_detail li").click(function(){
        $(this).children(".use").toggle();
        $(this).children(".heat").toggle();
        $(this).children(".detail_toggle").toggleClass("rotate");

    })
}

/* 쉼터 타입 클릭하면 해당 타입목록보여주기 (위의 function이용) - 전체지역*/
    let typeSearchList = document.querySelector(".search_list li");
    $(".search_list li").click(function(){
        $(".shelter_list_dong span").html("");
        let typeDetailItem = [];
        switch(($(this).attr("class"))){
            case "welfare_center" :
                typeDetailItem = addObject["DATA"].filter(item=>item["equp_type"] === 2);
                fillHtmlList(typeDetailItem);
                break;
            case "silvertown" :
                typeDetailItem = addObject["DATA"].filter(item=>item["equp_type"] === 1);
                fillHtmlList(typeDetailItem);
                break;
            case "socialcenter" :
                typeDetailItem = addObject["DATA"].filter(item=>item["equp_type"] === 3);
                fillHtmlList(typeDetailItem);
                break;
            case "lounge" :
                typeDetailItem = addObject["DATA"].filter(item=>item["equp_type"] === 4);
                fillHtmlList(typeDetailItem);
                break;
        }
        $("#shelter_type_page").removeClass("shelter_move_in_left");
        $("#shelter_type_page").addClass("shelter_move_out_right");
        $("#shelter_list_detail").removeClass("shelter_list_detail_move_out_bottom");
        $("#shelter_list_detail").addClass("shelter_list_detail_move_in_top");
    })
/* 쉼터목록에서 select값에 따라 sorting해주기 */
function selectSorting(detailItemArray){
    $("select[id=type_select], select[id=night_select], select[id=area_select]").change(function(){
        // let selectDetailItem = [];
        switch($(this).val()){
            case "shelter_all" :
                selectDetailItem = detailItemArray.filter(item=>item["equp_type"]);
                fillHtmlList(selectDetailItem);
                break;
            case "welfare_center" :
                selectDetailItem = detailItemArray.filter(item=>item["equp_type"] === 2);
                fillHtmlList(selectDetailItem);
                break;
            case "silvertown" :
                    selectDetailItem = detailItemArray.filter(item=>item["equp_type"] === 1);
                    fillHtmlList(selectDetailItem);
                break;
            case "socialcenter" :
                    selectDetailItem = detailItemArray.filter(item=>item["equp_type"] === 3);
                    fillHtmlList(selectDetailItem);
                break;
            case "lounge" :
                    selectDetailItem = detailItemArray.filter(item=>item["equp_type"] === 4);
                    fillHtmlList(selectDetailItem);
                break;
            case "night_all" :
                    selectDetailItem = detailItemArray.filter(item=>item["chk3_yn"] === "Y");
                    fillHtmlList(selectDetailItem);
                break;
            case "weekly" :
                    selectDetailItem = detailItemArray.filter(item=>item["chk3_yn"] === "N");
                    fillHtmlList(selectDetailItem);
                break;
            case "nighttime" :
                    selectDetailItem = detailItemArray.filter(item=>item["chk3_yn"] === "Y");
                    fillHtmlList(selectDetailItem);
                break;
            case "area_all" :
                    selectDetailItem = detailItemArray.filter(item=>item["r_area_sqr"]);
                    fillHtmlList(selectDetailItem);
                break;
            case "below_thirty" :
                    selectDetailItem = detailItemArray.filter(item=>item["r_area_sqr"] <= 99);
                    fillHtmlList(selectDetailItem);
                break;
            case "below_oneh" :
                    selectDetailItem = detailItemArray.filter(item=>item["r_area_sqr"] <= 330 && item["r_area_sqr"] > 100);
                    fillHtmlList(selectDetailItem);
                break;
            case "below_threeh" :
                    selectDetailItem = detailItemArray.filter(item=>item["r_area_sqr"] <= 991 && item["r_area_sqr"] > 331);
                    fillHtmlList(selectDetailItem);
                break;
            case "over_threeh" :
                    selectDetailItem = detailItemArray.filter(item=>item["r_area_sqr"] > 991);
                    fillHtmlList(selectDetailItem);
                break;
        }
        console.log($(this).val());
    })
}

/* map_page 카카오맵 불러오기*/
    navigator.geolocation.getCurrentPosition(function(position){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        markMarker(latitude, longitude)
        console.log(latitude, longitude);
    })

function markMarker(latitude, longitude){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
    // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
    var positions = [
        {content:'<div>능인종합사회복지관</div>',latlng: new kakao.maps.LatLng(37.4716355,127.0524764)},
        {content:'<div>대치2단지아파트경로당</div>',latlng: new kakao.maps.LatLng(37.4939654,127.0750977)},
        {content:'<div>강남종합사회복지관</div>',latlng: new kakao.maps.LatLng(37.4939654,127.0750977)},
        {content:'<div>개포4동주민센터</div>',latlng: new kakao.maps.LatLng(37.4788109,127.0516147)},
        {content:'<div>포이경로당</div>',latlng: new kakao.maps.LatLng(37.4759943,127.0492625)},
        {content:'<div>일원2동주민센터</div>',latlng: new kakao.maps.LatLng(37.4921124,127.073664)},
        {content:'<div>밀미리경로당</div>',latlng: new kakao.maps.LatLng(37.4809506,127.0486547)},
        {content:'<div>개포경로당</div>',latlng: new kakao.maps.LatLng(37.4836677,127.0608782)},
        {content:'<div>개포2동주민센터</div>',latlng: new kakao.maps.LatLng(37.4897452,127.0690638)},
        {content:'<div>경남아파트 경로당</div>',latlng: new kakao.maps.LatLng(37.4843872,127.054267)},
        {content:'<div>개포1동주민센터</div>',latlng: new kakao.maps.LatLng(37.4819375999999,127.0574671)},
        {content:'<div>논현2동주민센터</div>',latlng: new kakao.maps.LatLng(37.5172158,127.0371731)},
        {content:'<div>논현노인종합사회복지관</div>',latlng: new kakao.maps.LatLng(37.5120204,127.0260767)},
        {content:'<div>논현1동주민센터</div>',latlng: new kakao.maps.LatLng(37.5114451,127.0285364)},
        {content:'<div>논현경로당</div>',latlng: new kakao.maps.LatLng(37.5111874,127.0300758)},
        {content:'<div>영동경로당</div>',latlng: new kakao.maps.LatLng(37.5116297,127.0387639)},
        {content:'<div>한마음경로당</div>',latlng: new kakao.maps.LatLng(37.5163831,127.030435)},
        {content:'<div>래미안대치팰리스1단지 경로당</div>',latlng: new kakao.maps.LatLng(37.4994914,127.0610527)},
        {content:'<div>은마경로당</div>',latlng: new kakao.maps.LatLng(37.4974576,127.0653265)},
        {content:'<div>우성(아)경로당</div>',latlng: new kakao.maps.LatLng(37.4908748,127.0573085)},
        {content:'<div>선경(아)경로당</div>',latlng: new kakao.maps.LatLng(37.4920987,127.0625605)},
        {content:'<div>대치1동주민센터</div>',latlng: new kakao.maps.LatLng(37.4932176,127.0567622)},
        {content:'<div>한티경로당</div>',latlng: new kakao.maps.LatLng(37.501633,127.0515319)},
        {content:'<div>대치노인복지센터</div>',latlng: new kakao.maps.LatLng(37.5030053,127.054117)},
        {content:'<div>대치4동주민센터</div>',latlng: new kakao.maps.LatLng(37.4997799,127.0577699)},
        {content:'<div>대치4경로당</div>',latlng: new kakao.maps.LatLng(37.4997876,127.0581713)},
        {content:'<div>대치경로당</div>',latlng: new kakao.maps.LatLng(37.5027923,127.0619835)},
        {content:'<div>대치2동주민센터</div>',latlng: new kakao.maps.LatLng(37.5022464,127.0641595)},
        {content:'<div>강남70+라운지</div>',latlng: new kakao.maps.LatLng(37.4849358,127.0460668)},
        {content:'<div>도곡구립경로당</div>',latlng: new kakao.maps.LatLng(37.4833096,127.0450947)},
        {content:'<div>도곡2동주민센터</div>',latlng: new kakao.maps.LatLng(37.4836763,127.0464243)},
        {content:'<div>개포한신(아)경로당</div>',latlng: new kakao.maps.LatLng(37.4869126,127.0489647)},
        {content:'<div>개포우성4차경로당</div>',latlng: new kakao.maps.LatLng(37.4853084,127.0494848)},
        {content:'<div>개포4차우성경로당</div>',latlng: new kakao.maps.LatLng(37.4840462,127.0486019)},
        {content:'<div>대림아크로빌경로당</div>',latlng: new kakao.maps.LatLng(37.4881387,127.0511666)},
        {content:'<div>도곡1동주민센터</div>',latlng: new kakao.maps.LatLng(37.4882371,127.0392707)},
        {content:'<div>삼성래미안경로당</div>',latlng: new kakao.maps.LatLng(37.4896766,127.0505919)},
        {content:'<div>도곡1경로당</div>',latlng: new kakao.maps.LatLng(37.4863557,127.0356097)},
        {content:'<div>삼성경로당</div>',latlng: new kakao.maps.LatLng(37.5164943,127.0653561)},
        {content:'<div>봉전경로당</div>',latlng: new kakao.maps.LatLng(37.5098255,127.0518875)},
        {content:'<div>삼성1동주민센터</div>',latlng: new kakao.maps.LatLng(37.5143821,127.062611)},
        {content:'<div>삼성2동주민센터</div>',latlng: new kakao.maps.LatLng(37.5111663,127.0459548)},
        {content:'<div>힐스테이트2단지(아)경로당</div>',latlng: new kakao.maps.LatLng(37.5138493,127.0515142)},
        {content:'<div>강남노인종합복지관</div>',latlng: new kakao.maps.LatLng(37.5158762,127.0521299)},
        {content:'<div>윗반고개 경로당</div>',latlng: new kakao.maps.LatLng(37.4655409,127.1094956)},
        {content:'<div>반고개 경로당</div>',latlng: new kakao.maps.LatLng(37.4640533,127.1069868)},
        {content:'<div>수서3단지경로당</div>',latlng: new kakao.maps.LatLng(37.491035,127.1002787)},
        {content:'<div>수서명화종합사회복지관</div>',latlng: new kakao.maps.LatLng(37.491035,127.1002787)},
        {content:'<div>수서동주민센터</div>',latlng: new kakao.maps.LatLng(37.4888774,127.1049578)},
        {content:'<div>미미위강남세움센터</div>',latlng: new kakao.maps.LatLng(37.4869823,127.1069593)},
        {content:'<div>수서종합사회복지관</div>',latlng: new kakao.maps.LatLng(37.4872625,127.1051693)},
        {content:'<div>수서7단지경로당</div>',latlng: new kakao.maps.LatLng(37.4870719,127.0983474)},
        {content:'<div>태화기독교사회복지관</div>',latlng: new kakao.maps.LatLng(37.4847490999999,127.0934205)},
        {content:'<div>수서10단지경로당</div>',latlng: new kakao.maps.LatLng(37.4846721,127.0873935)},
        {content:'<div>학수정경로당</div>',latlng: new kakao.maps.LatLng(37.5213531,127.023522)},
        {content:'<div>신사동주민센터</div>',latlng: new kakao.maps.LatLng(37.5239447,127.0227857)},
        {content:'<div>압구정1동 경로당</div>',latlng: new kakao.maps.LatLng(37.5239227,127.0322517)},
        {content:'<div>압구정노인복지센터</div>',latlng: new kakao.maps.LatLng(37.5234943,127.0381592)},
        {content:'<div>압구정복지센터경로당</div>',latlng: new kakao.maps.LatLng(37.5234943,127.0381592)},
        {content:'<div>로데오현대(아)경로당</div>',latlng: new kakao.maps.LatLng(37.5265823,127.0372926)},
        {content:'<div>미성2차아파트경로당</div>',latlng: new kakao.maps.LatLng(37.5247016,127.0196296)},
        {content:'<div>압구정동주민센터</div>',latlng: new kakao.maps.LatLng(37.5297371,127.030708)},
        {content:'<div>현대(아)경로당</div>',latlng: new kakao.maps.LatLng(37.5297371,127.030708)},
        {content:'<div>상방교경로당</div>',latlng: new kakao.maps.LatLng(37.5023502,127.031864)},
        {content:'<div>강남시니어플라자</div>',latlng: new kakao.maps.LatLng(37.5097601,127.0432116)},
        {content:'<div>테헤란아아파크실버클럽</div>',latlng: new kakao.maps.LatLng(37.5024363,127.0466551)},
        {content:'<div>하방교경로당</div>',latlng: new kakao.maps.LatLng(37.4952531,127.0345601)},
        {content:'<div>역삼복지경로당</div>',latlng: new kakao.maps.LatLng(37.4970741,127.0471021)},
        {content:'<div>역삼2동주민센터</div>',latlng: new kakao.maps.LatLng(37.495921,127.0468013)},
        {content:'<div>역삼2동경로당</div>',latlng: new kakao.maps.LatLng(37.4944941,127.0418244)},
        {content:'<div>역삼1동주민센터</div>',latlng: new kakao.maps.LatLng(37.495188,127.0332163)},
        {content:'<div>방죽2경로당</div>',latlng: new kakao.maps.LatLng(37.471746,127.109665)},
        {content:'<div>세곡동주민센터</div>',latlng: new kakao.maps.LatLng(37.4690094,127.1069041)},
        {content:'<div>방죽1시니어센터</div>',latlng: new kakao.maps.LatLng(37.4708274,127.1053099)},
        {content:'<div>우성7차아파트경로당</div>',latlng: new kakao.maps.LatLng(37.492341,127.0781235)},
        {content:'<div>대청경로당</div>',latlng: new kakao.maps.LatLng(37.4927795,127.0828179)},
        {content:'<div>제1경로당</div>',latlng: new kakao.maps.LatLng(37.492615,127.0902134)},
        {content:'<div>대청종합사회복지관</div>',latlng: new kakao.maps.LatLng(37.492615,127.0902134)},
        {content:'<div>일원1동주민센터</div>',latlng: new kakao.maps.LatLng(37.4918223,127.0880201)},
        {content:'<div>일원경로당</div>',latlng: new kakao.maps.LatLng(37.4840536,127.0779528)},
        {content:'<div>일원본동주민센터</div>',latlng: new kakao.maps.LatLng(37.4833385,127.0864656)},
        {content:'<div>청수경로당</div>',latlng: new kakao.maps.LatLng(37.5274033,127.0496603)},
        {content:'<div>청담동주민센터</div>',latlng: new kakao.maps.LatLng(37.5250521,127.049284)},
        {content:'<div>청담래미안로이뷰경로당</div>',latlng: new kakao.maps.LatLng(37.5244098,127.0561536)},
        {content:'<div>청담삼성1차경로당</div>',latlng: new kakao.maps.LatLng(37.5251376,127.0442417)},
        {content:'<div>청담경로당</div>',latlng: new kakao.maps.LatLng(37.5251376,127.0442417)}
        ];
    
    for (var i = 0; i < positions.length; i ++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng // 마커의 위치
        });
    
        // 마커에 표시할 인포윈도우를 생성합니다 
        var infowindow = new kakao.maps.InfoWindow({
            content: positions[i].content // 인포윈도우에 표시할 내용
        });
    
        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다 
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
    
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
    function makeOverListener(map, marker, infowindow) {
        return function() {
            infowindow.open(map, marker);
        };
    }
    
    // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
    function makeOutListener(infowindow) {
        return function() {
            infowindow.close();
        };
    }
}

/* 수동 json*/
let addObject = {
    "DATA" : [
        {"g2_id":4234,"r_seq_no":1434,"equp_type":2,"r_area_nm":"능인종합사회복지관","r_detl_add":"서울특별시 강남구 개포동 1055","latitude":37.4716355,"longitude":127.0524764,"r_area_sqr":24.6,"use_prnb":10,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4249,"r_seq_no":1448,"equp_type":1,"r_area_nm":"대치2단지아파트경로당","r_detl_add":"서울특별시 강남구 개포동 12","latitude":37.4939654,"longitude":127.0750977,"r_area_sqr":243,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4254,"r_seq_no":1451,"equp_type":2,"r_area_nm":"강남종합사회복지관","r_detl_add":"서울특별시 강남구 개포동 12","latitude":37.4939654,"longitude":127.0750977,"r_area_sqr":2131,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4236,"r_seq_no":1433,"equp_type":3,"r_area_nm":"개포4동주민센터","r_detl_add":"서울특별시 강남구 개포동 1211-4","latitude":37.4788109,"longitude":127.0516147,"r_area_sqr":825,"use_prnb":10,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4235,"r_seq_no":1432,"equp_type":1,"r_area_nm":"포이경로당","r_detl_add":"서울특별시 강남구 개포동 1220","latitude":37.4759943,"longitude":127.0492625,"r_area_sqr":87,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4248,"r_seq_no":1450,"equp_type":3,"r_area_nm":"일원2동주민센터","r_detl_add":"서울특별시 강남구 개포동 12-6","latitude":37.4921124,"longitude":127.073664,"r_area_sqr":243,"use_prnb":50,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4238,"r_seq_no":1431,"equp_type":1,"r_area_nm":"밀미리경로당","r_detl_add":"서울특별시 강남구 개포동 1265-4","latitude":37.4809506,"longitude":127.0486547,"r_area_sqr":127,"use_prnb":60,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4223,"r_seq_no":1429,"equp_type":1,"r_area_nm":"개포경로당","r_detl_add":"서울특별시 강남구 개포동 169-3","latitude":37.4836677,"longitude":127.0608782,"r_area_sqr":84,"use_prnb":20,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4229,"r_seq_no":1430,"equp_type":3,"r_area_nm":"개포2동주민센터","r_detl_add":"서울특별시 강남구 개포동 182","latitude":37.4897452,"longitude":127.0690638,"r_area_sqr":2790,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4225,"r_seq_no":1428,"equp_type":1,"r_area_nm":"경남아파트 경로당","r_detl_add":"서울특별시 강남구 개포동 649","latitude":37.4843872,"longitude":127.054267,"r_area_sqr":77,"use_prnb":20,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4230,"r_seq_no":1427,"equp_type":3,"r_area_nm":"개포1동주민센터","r_detl_add":"서울특별시 강남구 개포동 660-7","latitude":37.4819375999999,"longitude":127.0574671,"r_area_sqr":429,"use_prnb":20,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4177,"r_seq_no":1381,"equp_type":3,"r_area_nm":"논현2동주민센터","r_detl_add":"서울특별시 강남구 논현동 114-24","latitude":37.5172158,"longitude":127.0371731,"r_area_sqr":832,"use_prnb":50,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4176,"r_seq_no":1378,"equp_type":2,"r_area_nm":"논현노인종합사회복지관","r_detl_add":"서울특별시 강남구 논현동 125-13","latitude":37.5120204,"longitude":127.0260767,"r_area_sqr":1631,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4181,"r_seq_no":1377,"equp_type":3,"r_area_nm":"논현1동주민센터","r_detl_add":"서울특별시 강남구 논현동 133-13","latitude":37.5114451,"longitude":127.0285364,"r_area_sqr":170,"use_prnb":42,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4175,"r_seq_no":1376,"equp_type":1,"r_area_nm":"논현경로당","r_detl_add":"서울특별시 강남구 논현동 150-5","latitude":37.5111874,"longitude":127.0300758,"r_area_sqr":83,"use_prnb":21,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4179,"r_seq_no":1380,"equp_type":1,"r_area_nm":"영동경로당","r_detl_add":"서울특별시 강남구 논현동 263-23","latitude":37.5116297,"longitude":127.0387639,"r_area_sqr":70,"use_prnb":25,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4180,"r_seq_no":1379,"equp_type":1,"r_area_nm":"한마음경로당","r_detl_add":"서울특별시 강남구 논현동 80-11","latitude":37.5163831,"longitude":127.030435,"r_area_sqr":90,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4205,"r_seq_no":1401,"equp_type":1,"r_area_nm":"래미안대치팰리스1단지 경로당","r_detl_add":"서울특별시 강남구 대치동 1027","latitude":37.4994914,"longitude":127.0610527,"r_area_sqr":158,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4206,"r_seq_no":1403,"equp_type":1,"r_area_nm":"은마경로당","r_detl_add":"서울특별시 강남구 대치동 316","latitude":37.4974576,"longitude":127.0653265,"r_area_sqr":400,"use_prnb":50,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4202,"r_seq_no":1399,"equp_type":1,"r_area_nm":"우성(아)경로당","r_detl_add":"서울특별시 강남구 대치동 500","latitude":37.4908748,"longitude":127.0573085,"r_area_sqr":102,"use_prnb":26,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4197,"r_seq_no":1398,"equp_type":1,"r_area_nm":"선경(아)경로당","r_detl_add":"서울특별시 강남구 대치동 506","latitude":37.4920987,"longitude":127.0625605,"r_area_sqr":115,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4201,"r_seq_no":1400,"equp_type":3,"r_area_nm":"대치1동주민센터","r_detl_add":"서울특별시 강남구 대치동 646-2","latitude":37.4932176,"longitude":127.0567622,"r_area_sqr":319,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4211,"r_seq_no":1407,"equp_type":1,"r_area_nm":"한티경로당","r_detl_add":"서울특별시 강남구 대치동 899-25","latitude":37.501633,"longitude":127.0515319,"r_area_sqr":163,"use_prnb":50,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4204,"r_seq_no":1405,"equp_type":1,"r_area_nm":"대치노인복지센터","r_detl_add":"서울특별시 강남구 대치동 901-4","latitude":37.5030053,"longitude":127.054117,"r_area_sqr":24.5,"use_prnb":10,"heat3_cnt":1,"chk1_yn":"N","chk3_yn":"N"},
        {"g2_id":4213,"r_seq_no":1408,"equp_type":3,"r_area_nm":"대치4동주민센터","r_detl_add":"서울특별시 강남구 대치동 928-22","latitude":37.4997799,"longitude":127.0577699,"r_area_sqr":301,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4199,"r_seq_no":1406,"equp_type":1,"r_area_nm":"대치4경로당","r_detl_add":"서울특별시 강남구 대치동 929-10","latitude":37.4997876,"longitude":127.0581713,"r_area_sqr":82,"use_prnb":50,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4203,"r_seq_no":1402,"equp_type":1,"r_area_nm":"대치경로당","r_detl_add":"서울특별시 강남구 대치동 971-15","latitude":37.5027923,"longitude":127.0619835,"r_area_sqr":92,"use_prnb":35,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4200,"r_seq_no":1404,"equp_type":3,"r_area_nm":"대치2동주민센터","r_detl_add":"서울특별시 강남구 대치동 980-9","latitude":37.5022464,"longitude":127.0641595,"r_area_sqr":88,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4221,"r_seq_no":1419,"equp_type":1,"r_area_nm":"강남70+라운지","r_detl_add":"서울특별시 강남구 도곡동 420-10","latitude":37.4849358,"longitude":127.0460668,"r_area_sqr":51.3,"use_prnb":12,"heat3_cnt":1,"chk1_yn":"N","chk3_yn":"N"},
        {"g2_id":4227,"r_seq_no":1424,"equp_type":1,"r_area_nm":"도곡구립경로당","r_detl_add":"서울특별시 강남구 도곡동 455","latitude":37.4833096,"longitude":127.0450947,"r_area_sqr":84,"use_prnb":25,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4228,"r_seq_no":1426,"equp_type":3,"r_area_nm":"도곡2동주민센터","r_detl_add":"서울특별시 강남구 도곡동 459","latitude":37.4836763,"longitude":127.0464243,"r_area_sqr":463,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4226,"r_seq_no":1425,"equp_type":1,"r_area_nm":"개포한신(아)경로당","r_detl_add":"서울특별시 강남구 도곡동 464","latitude":37.4869126,"longitude":127.0489647,"r_area_sqr":100,"use_prnb":25,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4224,"r_seq_no":1423,"equp_type":1,"r_area_nm":"개포우성4차경로당","r_detl_add":"서울특별시 강남구 도곡동 465","latitude":37.4853084,"longitude":127.0494848,"r_area_sqr":34,"use_prnb":25,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4216,"r_seq_no":1420,"equp_type":1,"r_area_nm":"개포4차우성경로당","r_detl_add":"서울특별시 강남구 도곡동 465-3","latitude":37.4840462,"longitude":127.0486019,"r_area_sqr":34,"use_prnb":10,"heat3_cnt":1,"chk1_yn":"N","chk3_yn":"N"},
        {"g2_id":4218,"r_seq_no":1421,"equp_type":1,"r_area_nm":"대림아크로빌경로당","r_detl_add":"서울특별시 강남구 도곡동 467-6","latitude":37.4881387,"longitude":127.0511666,"r_area_sqr":64,"use_prnb":50,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4222,"r_seq_no":1418,"equp_type":3,"r_area_nm":"도곡1동주민센터","r_detl_add":"서울특별시 강남구 도곡동 892-6","latitude":37.4882371,"longitude":127.0392707,"r_area_sqr":648,"use_prnb":50,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4215,"r_seq_no":1422,"equp_type":1,"r_area_nm":"삼성래미안경로당","r_detl_add":"서울특별시 강남구 도곡동 91-5","latitude":37.4896766,"longitude":127.0505919,"r_area_sqr":115,"use_prnb":25,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4217,"r_seq_no":1417,"equp_type":1,"r_area_nm":"도곡1경로당","r_detl_add":"서울특별시 강남구 도곡동 950-10","latitude":37.4863557,"longitude":127.0356097,"r_area_sqr":132,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4194,"r_seq_no":1392,"equp_type":1,"r_area_nm":"삼성경로당","r_detl_add":"서울특별시 강남구 삼성동 100-8","latitude":37.5164943,"longitude":127.0653561,"r_area_sqr":172,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4196,"r_seq_no":1395,"equp_type":1,"r_area_nm":"봉전경로당","r_detl_add":"서울특별시 강남구 삼성동 123-29","latitude":37.5098255,"longitude":127.0518875,"r_area_sqr":244,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4191,"r_seq_no":1393,"equp_type":3,"r_area_nm":"삼성1동주민센터","r_detl_add":"서울특별시 강남구 삼성동 161-2","latitude":37.5143821,"longitude":127.062611,"r_area_sqr":302,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4198,"r_seq_no":1397,"equp_type":3,"r_area_nm":"삼성2동주민센터","r_detl_add":"서울특별시 강남구 삼성동 38-34","latitude":37.5111663,"longitude":127.0459548,"r_area_sqr":786,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4193,"r_seq_no":1396,"equp_type":1,"r_area_nm":"힐스테이트2단지(아)경로당","r_detl_add":"서울특별시 강남구 삼성동 50","latitude":37.5138493,"longitude":127.0515142,"r_area_sqr":177,"use_prnb":21,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4195,"r_seq_no":1394,"equp_type":2,"r_area_nm":"강남노인종합복지관","r_detl_add":"서울특별시 강남구 삼성동 66","latitude":37.5158762,"longitude":127.0521299,"r_area_sqr":54,"use_prnb":24,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4239,"r_seq_no":1439,"equp_type":1,"r_area_nm":"윗반고개 경로당","r_detl_add":"서울특별시 강남구 세곡동 100-4","latitude":37.4655409,"longitude":127.1094956,"r_area_sqr":210,"use_prnb":70,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4232,"r_seq_no":1435,"equp_type":1,"r_area_nm":"반고개 경로당","r_detl_add":"서울특별시 강남구 세곡동 128-13","latitude":37.4640533,"longitude":127.1069868,"r_area_sqr":98,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4247,"r_seq_no":1453,"equp_type":1,"r_area_nm":"수서3단지경로당","r_detl_add":"서울특별시 강남구 수서동 707","latitude":37.491035,"longitude":127.1002787,"r_area_sqr":145,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4261,"r_seq_no":1456,"equp_type":2,"r_area_nm":"수서명화종합사회복지관","r_detl_add":"서울특별시 강남구 수서동 707","latitude":37.491035,"longitude":127.1002787,"r_area_sqr":3228,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4260,"r_seq_no":1455,"equp_type":3,"r_area_nm":"수서동주민센터","r_detl_add":"서울특별시 강남구 수서동 718-2","latitude":37.4888774,"longitude":127.1049578,"r_area_sqr":1051,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4253,"r_seq_no":1452,"equp_type":2,"r_area_nm":"미미위강남세움센터","r_detl_add":"서울특별시 강남구 수서동 721","latitude":37.4869823,"longitude":127.1069593,"r_area_sqr":40,"use_prnb":10,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4258,"r_seq_no":1457,"equp_type":2,"r_area_nm":"수서종합사회복지관","r_detl_add":"서울특별시 강남구 수서동 723","latitude":37.4872625,"longitude":127.1051693,"r_area_sqr":1438,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4250,"r_seq_no":1454,"equp_type":1,"r_area_nm":"수서7단지경로당","r_detl_add":"서울특별시 강남구 수서동 736","latitude":37.4870719,"longitude":127.0983474,"r_area_sqr":131,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4243,"r_seq_no":1443,"equp_type":2,"r_area_nm":"태화기독교사회복지관","r_detl_add":"서울특별시 강남구 수서동 741","latitude":37.4847490999999,"longitude":127.0934205,"r_area_sqr":74.14,"use_prnb":25,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4245,"r_seq_no":1441,"equp_type":1,"r_area_nm":"수서10단지경로당","r_detl_add":"서울특별시 강남구 수서동 746","latitude":37.4846721,"longitude":127.0873935,"r_area_sqr":116,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4172,"r_seq_no":1374,"equp_type":1,"r_area_nm":"학수정경로당","r_detl_add":"서울특별시 강남구 신사동 544-29","latitude":37.5213531,"longitude":127.023522,"r_area_sqr":145,"use_prnb":50,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4178,"r_seq_no":1375,"equp_type":3,"r_area_nm":"신사동주민센터","r_detl_add":"서울특별시 강남구 신사동 548-1","latitude":37.5239447,"longitude":127.0227857,"r_area_sqr":157,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4190,"r_seq_no":1386,"equp_type":1,"r_area_nm":"압구정1동 경로당","r_detl_add":"서울특별시 강남구 신사동 627-2","latitude":37.5239227,"longitude":127.0322517,"r_area_sqr":98,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4168,"r_seq_no":1373,"equp_type":2,"r_area_nm":"압구정노인복지센터","r_detl_add":"서울특별시 강남구 신사동 652-13","latitude":37.5234943,"longitude":127.0381592,"r_area_sqr":40,"use_prnb":10,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4184,"r_seq_no":1383,"equp_type":1,"r_area_nm":"압구정복지센터경로당","r_detl_add":"서울특별시 강남구 신사동 652-13","latitude":37.5234943,"longitude":127.0381592,"r_area_sqr":146,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4182,"r_seq_no":1382,"equp_type":1,"r_area_nm":"로데오현대(아)경로당","r_detl_add":"서울특별시 강남구 신사동 658-2","latitude":37.5265823,"longitude":127.0372926,"r_area_sqr":331,"use_prnb":10,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4173,"r_seq_no":1372,"equp_type":1,"r_area_nm":"미성2차아파트경로당","r_detl_add":"서울특별시 강남구 압구정동 415","latitude":37.5247016,"longitude":127.0196296,"r_area_sqr":70,"use_prnb":21,"heat3_cnt":1,"chk1_yn":"N","chk3_yn":"N"},
        {"g2_id":4183,"r_seq_no":1385,"equp_type":3,"r_area_nm":"압구정동주민센터","r_detl_add":"서울특별시 강남구 압구정동 458","latitude":37.5297371,"longitude":127.030708,"r_area_sqr":203,"use_prnb":20,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4189,"r_seq_no":1384,"equp_type":1,"r_area_nm":"현대(아)경로당","r_detl_add":"서울특별시 강남구 압구정동 458","latitude":37.5297371,"longitude":127.030708,"r_area_sqr":221,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4214,"r_seq_no":1410,"equp_type":1,"r_area_nm":"상방교경로당","r_detl_add":"서울특별시 강남구 역삼동 632-13","latitude":37.5023502,"longitude":127.031864,"r_area_sqr":179,"use_prnb":50,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4209,"r_seq_no":1409,"equp_type":2,"r_area_nm":"강남시니어플라자","r_detl_add":"서울특별시 강남구 역삼동 682-8","latitude":37.5097601,"longitude":127.0432116,"r_area_sqr":40,"use_prnb":10,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4210,"r_seq_no":1413,"equp_type":1,"r_area_nm":"테헤란아아파크실버클럽","r_detl_add":"서울특별시 강남구 역삼동 709-5","latitude":37.5024363,"longitude":127.0466551,"r_area_sqr":141,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"N","chk3_yn":"N"},
        {"g2_id":4212,"r_seq_no":1411,"equp_type":1,"r_area_nm":"하방교경로당","r_detl_add":"서울특별시 강남구 역삼동 752-11","latitude":37.4952531,"longitude":127.0345601,"r_area_sqr":321,"use_prnb":50,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4219,"r_seq_no":1415,"equp_type":1,"r_area_nm":"역삼복지경로당","r_detl_add":"서울특별시 강남구 역삼동 760-3","latitude":37.4970741,"longitude":127.0471021,"r_area_sqr":136,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4220,"r_seq_no":1416,"equp_type":3,"r_area_nm":"역삼2동주민센터","r_detl_add":"서울특별시 강남구 역삼동 761-26","latitude":37.495921,"longitude":127.0468013,"r_area_sqr":253,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4207,"r_seq_no":1414,"equp_type":1,"r_area_nm":"역삼2동경로당","r_detl_add":"서울특별시 강남구 역삼동 781-34","latitude":37.4944941,"longitude":127.0418244,"r_area_sqr":90,"use_prnb":20,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4208,"r_seq_no":1412,"equp_type":3,"r_area_nm":"역삼1동주민센터","r_detl_add":"서울특별시 강남구 역삼동 829-20","latitude":37.495188,"longitude":127.0332163,"r_area_sqr":531,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4233,"r_seq_no":1438,"equp_type":1,"r_area_nm":"방죽2경로당","r_detl_add":"서울특별시 강남구 율현동 201-19","latitude":37.471746,"longitude":127.109665,"r_area_sqr":198,"use_prnb":49,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4231,"r_seq_no":1437,"equp_type":3,"r_area_nm":"세곡동주민센터","r_detl_add":"서울특별시 강남구 율현동 278-1","latitude":37.4690094,"longitude":127.1069041,"r_area_sqr":338,"use_prnb":84,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4237,"r_seq_no":1436,"equp_type":1,"r_area_nm":"방죽1시니어센터","r_detl_add":"서울특별시 강남구 율현동 308-15","latitude":37.4708274,"longitude":127.1053099,"r_area_sqr":198,"use_prnb":91,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4252,"r_seq_no":1449,"equp_type":1,"r_area_nm":"우성7차아파트경로당","r_detl_add":"서울특별시 강남구 일원동 615","latitude":37.492341,"longitude":127.0781235,"r_area_sqr":53,"use_prnb":15,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4240,"r_seq_no":1444,"equp_type":1,"r_area_nm":"대청경로당","r_detl_add":"서울특별시 강남구 일원동 621","latitude":37.4927795,"longitude":127.0828179,"r_area_sqr":147,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4241,"r_seq_no":1445,"equp_type":1,"r_area_nm":"제1경로당","r_detl_add":"서울특별시 강남구 일원동 711","latitude":37.492615,"longitude":127.0902134,"r_area_sqr":151,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4251,"r_seq_no":1447,"equp_type":2,"r_area_nm":"대청종합사회복지관","r_detl_add":"서울특별시 강남구 일원동 711","latitude":37.492615,"longitude":127.0902134,"r_area_sqr":1401,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4246,"r_seq_no":1446,"equp_type":3,"r_area_nm":"일원1동주민센터","r_detl_add":"서울특별시 강남구 일원동 712-3","latitude":37.4918223,"longitude":127.0880201,"r_area_sqr":1286,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4244,"r_seq_no":1440,"equp_type":1,"r_area_nm":"일원경로당","r_detl_add":"서울특별시 강남구 일원동 730","latitude":37.4840536,"longitude":127.0779528,"r_area_sqr":116,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4242,"r_seq_no":1442,"equp_type":3,"r_area_nm":"일원본동주민센터","r_detl_add":"서울특별시 강남구 일원동 735-3","latitude":37.4833385,"longitude":127.0864656,"r_area_sqr":1326,"use_prnb":10,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4186,"r_seq_no":1389,"equp_type":1,"r_area_nm":"청수경로당","r_detl_add":"서울특별시 강남구 청담동 112-26","latitude":37.5274033,"longitude":127.0496603,"r_area_sqr":228,"use_prnb":57,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4192,"r_seq_no":1391,"equp_type":3,"r_area_nm":"청담동주민센터","r_detl_add":"서울특별시 강남구 청담동 124-1","latitude":37.5250521,"longitude":127.049284,"r_area_sqr":337,"use_prnb":30,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"},
        {"g2_id":4188,"r_seq_no":1388,"equp_type":1,"r_area_nm":"청담래미안로이뷰경로당","r_detl_add":"서울특별시 강남구 청담동 134","latitude":37.5244098,"longitude":127.0561536,"r_area_sqr":131,"use_prnb":40,"heat3_cnt":1,"chk1_yn":"N","chk3_yn":"N"},
        {"g2_id":4185,"r_seq_no":1387,"equp_type":1,"r_area_nm":"청담삼성1차경로당","r_detl_add":"서울특별시 강남구 청담동 94-4","latitude":37.5251376,"longitude":127.0442417,"r_area_sqr":24,"use_prnb":7,"heat3_cnt":1,"chk1_yn":"N","chk3_yn":"N"},
        {"g2_id":4187,"r_seq_no":1390,"equp_type":1,"r_area_nm":"청담경로당","r_detl_add":"서울특별시 강남구 청담동 94-4","latitude":37.5251376,"longitude":127.0442417,"r_area_sqr":81,"use_prnb":20,"heat3_cnt":1,"chk1_yn":"Y","chk3_yn":"Y"}  
    ]
    }


/* 지하철역 위도경도 */
let subwayLat = [
    {"add":"개포동","Lat":37.485149,"Long":127.0598953},
    {"add":"논현동","Lat":37.5148554,"Long":127.033969},
    {"add":"대치동","Lat":37.490713,"Long":127.0586709},
    {"add":"도곡동","Lat":37.490713,"Long":127.0586709},
    {"add":"삼성동","Lat":37.5045703,"Long":127.0494465},
    {"add":"세곡동","Lat":37.4641998,"Long":127.1056319},
    {"add":"수서동","Lat":37.4737808,"Long":127.1065697},
    {"add":"신사동","Lat":37.5211419,"Long":127.0346289},
    {"add":"압구정동","Lat":37.5270213,"Long":127.0357939},
    {"add":"역삼동","Lat":37.5045703,"Long":127.0494465},
    {"add":"율현동","Lat":37.4723787,"Long":127.1156833},
    {"add":"일원동","Lat":37.4890175,"Long":127.0824833},
    {"add":"자곡동","Lat":37.474172,"Long":127.0950243},
    {"add":"청담동","Lat":37.5148554,"Long":127.033969}
]
