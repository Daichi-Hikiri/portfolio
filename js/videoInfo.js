// プレイヤープロフィール
let imagawaInfo = {name: "imagawa", weapon: "Guardian, Marshal", role: "Controller"};
let prinaInfo = {name: "Prina", weapon: "Phantom, Spectre", role: "Controller, Sentinel, Duelist"};
let wappoInfo = {name: "wappo", weapon: "Ares, Vandal", role: "Initiator, Sentinel"};
let toriInfo = {name: "tori", weapon: "Phantom", role: "Duelist, Initiator"};
let uryyyyyInfo = {name: "uryyyyy", weapon: "Vandal, Sheriff", role: "Sentinel, Controller"};
let ymgcInfo = {name: "ymgc", weapon: "Operator", role: "Duelist"};
let yujironInfo = {name: "Yujiron", weapon: "Odin, Vandal", role: "Initiator"};
let itouhamuInfo = {name: "itouhamu", weapon: "Vandal, Phantom", role: "Duelist, Sentinel, Controller"};

// クリップIDとタイトル
let imagawaVideo = [
    {id: "gThUMpz4sNA", title: "音全部飛んでたワ"},
    {id: "U_7um_0MTQs", title: "こどもace"},
    {id: "sc_4tpYX4N8", title: "ace"},
    {id: "Uu2c5gjBM-E", title: "えんとりー男"},
    {id: "WLgNQgWQQUM", title: "ふりっくぷりちゃん"},
    {id: "s8CpZsPA2yo", title: "uoooooooooooooooo"},
    {id: "RCTCODvEtyM", title: "りム石のぶりーず"},
    {id: "-XK511g8kGU", title: "うｒ－ｔｙんつよすぎワロタ"},
    {id: "eawyU45RsHE", title: "名誉の死"},
    {id: "IDnYj_bqmL0", title: "ヨル裏どり"},
    {id: "v6gF84oOe_8", title: "ぐちゃ"},
    {id: "fHU-5RZ8gJg", title: "かねくれ"},
    {id: "9V0t7n8PsPM", title: "マサル入信者募"},
    {id: "9_RKZfWR4sE", title: "新キャラ深夜"},
    {id: "4z_KvF4kng4", title: "高音質になった男"},
    {id: "ugnX5ObIXLc", title: "わぽがわ　見えないバトル"},
    {id: "CoNhZW6a3a4", title: "身内アンレートぷｒ　情熱解除"},
    {id: "RtWx3_8BrYg", title: "身内　あたし"},
    {id: "MvpIPbHzt2M", title: "身内くらっちうりーちゃん"},
    {id: "bBvk8HzmSmQ", title: "壁回"},
    {id: "TDX3HtSTzEE", title: "うおい！"},
    {id: "f0mvCF_NCsU", title: "女子ラント"},
    {id: "_IkVvrFNEHs", title: "ユメガワ"},
    {id: "_VCjwYX3daY", title: "ぷりんないけめん"},
    {id: "934dPzRYlN4", title: "どぼちて…"},
    {id: "zj8VQ7ZPiWo", title: "Valorant 大事なシーンで二回負けた;;"},
    {id: "tGFk5xcUJHE", title: "がわでぃあん"},
    {id: "wbJdVDsttMQ", title: "じゃりふたり"},
    {id: "0a7U-AidnNs", title: "野良の人"},
    {id: "A3PwpPISY5o", title: "Valorant ぷりちゃんビデオ判定　2020 08 14 17 26 09 10"},
    {id: "65xfVtmwH2I", title: "Valorant 2.8cmの男 2020 08 08 22 51 35 09"},
    {id: "zxNGBPQyd2s", title: "Valorant torisan disconnected 2020 08 08 16 55 58 02"},
    {id: "jCOmoX9LjcQ", title: "Valorant hamu stinger ace 2020 08 01 13 44 41 20"},
    {id: "M9FnOfgYYVk", title: "Valorant prina 2020 08 02 15 21 35 03"},
    {id: "3I3MVGWIOYs", title: "Valorant hamu bomb 2020 07 27 00 36 26 03"},
    {id: "-bsz3MNskTc", title: "Valorant hamu chang ace 2020 07 26 03 04 25 25"},
    {id: "Md3NQe2w-D4", title: "Valorant　ﾊｻﾏｯﾃﾙ… 2020 07 20 17 19 13 14 1"},
    {id: "SNrDbesEck0", title: "Valorant とりさん毒死"},
    {id: "vRsfre2pRE8", title: "Valorant だめなひ 2020 06 26 22 53 07 05"},
    {id: "00Aat3mTQQk", title: "Valorant うりーちゃんやばい 2020 06 25 22 30 50 19"},
    {id: "PzVzsv0x6nQ", title: "Valorant 2020 06 25 17 48 55 11"},
    {id: "UsbrAQ204Ho", title: "Valorant 2020 06 22 16 08 35 03"},
    {id: "yyrGJkWLFCc", title: "Valorant 2020 06 18 16 17 31 03"},
    {id: "Te2qeGF3rwc", title: "とりさんキル"},
    {id: "z6pw5gwSeWE", title: "Valorant 2020 06 08 17 37 53 05"},
    {id: "TnJM1-jVMZo", title: "Valorant 2020 06 06 19 57 31 07"}
];

let prinaVideo = [
    {id: "FMmSJXJKiCA", title: "ぐっちょんのカッコいいやつ"},
    {id: "ScT-JwFW5uY", title: "ぐちジェット"},
    {id: "1bKnDQxRU54", title: "毒毒毒"},
    {id: "H29pGw8PiPw", title: "bb"},
    {id: "FBaPU5pPGko", title: "別視点"},
    {id: "-c1upQ-0R7A", title: "no brain"},
    {id: "VhUEuzpXO3M", title: "わぽくらっち（声あり）"},
    {id: "EXzqxEUd63A", title: "うりムスACE"},
    {id: "86nuCQ9VpZ0", title: "とりクラッチ"},
    {id: "b_4Zr1wNgWk", title: "わっぽクラッチ"},
    {id: "lL1YNDwerOk", title: "いまがわいけめん"},
    {id: "00UdDfALy68", title: "ぼく。"},
    {id: "gyVSSCAHWFg", title: "とりさんクラッチ"},
    {id: "8TqDr6CjRcI", title: "帰ってきたドローン"},
    {id: "YT17kyhBWck", title: "和っぽクラッチ"},
    {id: "RbHsK5PCP1c", title: "うりーちゃんの"},
    {id: "CxwtDAY-G24", title: "うんこ"},
    {id: "tt7JEoKeITY", title: "うんこ２"},
    {id: "HN12WenkyfM", title: "big brain"},
    {id: "0DGxUqMQ1_0", title: "ホイールの調子悪くなった"},
    {id: "xpziZ-XQBpU", title: "ウリジョイace"},
    {id: "heLJ7AkplUw", title: "きーきー"},
    {id: "ldoCkXbXebA", title: "ガーディワッポ"},
    {id: "RWJCHy9f_bA", title: "拾ったSR"},
    {id: "1D3eyUEnEm4", title: "ヴァイパー"},
    {id: "RUjgMeZPk7k", title: "スカイ１"},
    {id: "_l8G5Yvv_Ec", title: "スカイ２"},
    {id: "9wxpUfZV_sE", title: "."},
    {id: "oZwBFdYfxNg", title: "花火"},
    {id: "q_cRozFi_Tk", title: "ぴよちゃん"},
    {id: "WTNNvmhl1pA", title: "朝のナイフ"},
    {id: "3AEEPqye6lA", title: "鳥クラッチ"},
    {id: "bDLGkZZ9j5Q", title: "ショックボルト"},
    {id: "Czxc0YWkUn4", title: "VALORANT 2020 08 22 16 30 03 Trim Trim"},
    {id: "bHMXA1k7It4", title: "オーメンマン"},
    {id: "OARY64F5HSg", title: "ウリーちゃんクラッチ"}
];

let wappoVideo = [

];

let toriVideo = [

];

let uryyyyyVideo = [

];

let ymgcVideo = [

];

let yujironVideo = [
    {id: "o-kK6H1pvDM", title: "hamu ACE"},
    {id: "H8QeEw3acxg", title: "快感"},
    {id: "GPD3eFsnVYc", title: "prina 獅子奮迅"},
    {id: "elS53C7agqQ", title: "楽しそう"},
    {id: "JAOi5QC7IKI", title: "2021年1月28日"}
];

let itouhamuVideo = [
    {id: "EE0C44UwaWE", title: "ACEEEEEEEE"},
    {id: "5CGK0HeRKE8", title: "分断された"},
    {id: "KNoa6ZBsOS0", title: "プライムの力"},
    {id: "t9X_oN_v75c", title: "エコ狩りACE"},
    {id: "IKRQPzIu3AM", title: "強すぎ"},
    {id: "2k2lNESrYWo", title: "ロー戦士じゃ追えんて"},
    {id: "mUBi0fxWytE", title: "いつぞやのマーシャル"},
    {id: "-CHCC6km8RE", title: "つよマーシャル1"},
    {id: "3rmc7jUqiHs", title: "そこは無理だ"},
    {id: "xwryRrmETXk", title: "あたふた"},
    {id: "rPuUpccaNn0", title: "ace"},
    {id: "pzjCaum7cbA", title: "ピストルクラッチ"},
    {id: "6oTTX22yzXU", title: "チートじゃないよ"},
    {id: "WpLHvELLKQ8", title: "俺は死なん！"},
    {id: "MMQhKh937Xo", title: "殺意高杉君"},
    {id: "dAt333uITMU", title: "wappo"},
    {id: "OtobD4XgQp0", title: "Valorant 2021 01 26 17 21 57 02 DVR"},
    {id: "SW0oWWd7_S8", title: "GOD ACE"},
    {id: "ausN-80X1DA", title: "心眼"},
    {id: "8k7BMT80lJo", title: "死体"},
    {id: "7mU-fD2D38g", title: "懐かしのACE"},
    {id: "jUAR6NHGga0", title: "⁉"},
    {id: "KQr3x50euMQ", title: "ultkill4"},
    {id: "6AnRwru1sDk", title: "ultkill3"},
    {id: "jODHLcv3AlU", title: "ultkill2"},
    {id: "dGVRqPuWqnY", title: "ultkill1"},
    {id: "qFU2OsAxk8Y", title: "shelif"},
    {id: "vkr3LsCHL9c", title: "Prina LostFantom"},
    {id: "vkr3LsCHL9c", title: "Prina LostFantom"},
    {id: "vkr3LsCHL9c", title: "Prina LostFantom"},
    {id: "aq5tN1j__pQ", title: "frenji-"}
];



//URLからプレイヤー名を取得
const path = window.location.pathname;
const playerName = path.match(".+/(.+?)\.[a-z]+([\?#;].*)?$")[1];

let pName = document.getElementById("name");
let weapon = document.getElementById("weapon");
let role = document.getElementById("role");

// 取得したプレイヤー名で表示内容を判別する処理
if(playerName == 'imagawa'){
    pName.innerHTML = imagawaInfo["name"];
    weapon.innerHTML = imagawaInfo["weapon"];
    role.innerHTML = imagawaInfo["role"];

    imagawaVideo.forEach( value => {
        document.write(
            '<div class="contents">',
                '<a href="https://www.youtube.com/embed/' + value['id'] + '" class="iframe">',
                    '<img src="http://img.youtube.com/vi/' + value['id'] + '/mqdefault.jpg" class="thumnail">',
                '</a>',
                '<p class="title">' + value['title'] + '</p>',
            '</div>');
    });
}

else if(playerName == 'prina'){
    pName.innerHTML = prinaInfo["name"];
    weapon.innerHTML = prinaInfo["weapon"];
    role.innerHTML = prinaInfo["role"];

    prinaVideo.forEach( value => {
        document.write(
            '<div class="contents">',
                '<a href="https://www.youtube.com/embed/' + value['id'] + '" class="iframe">',
                    '<img src="http://img.youtube.com/vi/' + value['id'] + '/mqdefault.jpg" class="thumnail">',
                '</a>',
                '<p class="title">' + value['title'] + '</p>',
            '</div>');
    });
}

else if(playerName == 'wappo'){
    pName.innerHTML = wappoInfo["name"];
    weapon.innerHTML = wappoInfo["weapon"];
    role.innerHTML = wappoInfo["role"];

    wappoVideo.forEach( value => {
        document.write(
            '<div class="contents">',
                '<a href="https://www.youtube.com/embed/' + value['id'] + '" class="iframe">',
                    '<img src="http://img.youtube.com/vi/' + value['id'] + '/mqdefault.jpg" class="thumnail">',
                '</a>',
                '<p class="title">' + value['title'] + '</p>',
            '</div>');
    });
}

else if(playerName == 'tori'){
    pName.innerHTML = toriInfo["name"];
    weapon.innerHTML = toriInfo["weapon"];
    role.innerHTML = toriInfo["role"];

    toriVideo.forEach( value => {
        document.write(
            '<div class="contents">',
                '<a href="https://www.youtube.com/embed/' + value['id'] + '" class="iframe">',
                    '<img src="http://img.youtube.com/vi/' + value['id'] + '/mqdefault.jpg" class="thumnail">',
                '</a>',
                '<p class="title">' + value['title'] + '</p>',
            '</div>');
    });
}

else if(playerName == 'uryyyyy'){
    pName.innerHTML = uryyyyyInfo["name"];
    weapon.innerHTML = uryyyyyInfo["weapon"];
    role.innerHTML = uryyyyyInfo["role"];

    uryyyyyVideo.forEach( value => {
        document.write(
            '<div class="contents">',
                '<a href="https://www.youtube.com/embed/' + value['id'] + '" class="iframe">',
                    '<img src="http://img.youtube.com/vi/' + value['id'] + '/mqdefault.jpg" class="thumnail">',
                '</a>',
                '<p class="title">' + value['title'] + '</p>',
            '</div>');
    });
}

else if(playerName == 'ymgc'){
    pName.innerHTML = ymgcInfo["name"];
    weapon.innerHTML = ymgcInfo["weapon"];
    role.innerHTML = ymgcInfo["role"];

    ymgcVideo.forEach( value => {
        document.write(
            '<div class="contents">',
                '<a href="https://www.youtube.com/embed/' + value['id'] + '" class="iframe">',
                    '<img src="http://img.youtube.com/vi/' + value['id'] + '/mqdefault.jpg" class="thumnail">',
                '</a>',
                '<p class="title">' + value['title'] + '</p>',
            '</div>');
    });
}

else if(playerName == 'yujiron'){
    pName.innerHTML = yujironInfo["name"];
    weapon.innerHTML = yujironInfo["weapon"];
    role.innerHTML = yujironInfo["role"];

    yujironVideo.forEach( value => {
        document.write(
            '<div class="contents">',
                '<a href="https://www.youtube.com/embed/' + value['id'] + '" class="iframe">',
                    '<img src="http://img.youtube.com/vi/' + value['id'] + '/mqdefault.jpg" class="thumnail">',
                '</a>',
                '<p class="title">' + value['title'] + '</p>',
            '</div>');
    });
}

else if(playerName == 'itouhamu'){
    pName.innerHTML = itouhamuInfo["name"];
    weapon.innerHTML = itouhamuInfo["weapon"];
    role.innerHTML = itouhamuInfo["role"];

    itouhamuVideo.forEach( value => {
        document.write(
            '<div class="contents">',
                '<a href="https://www.youtube.com/embed/' + value['id'] + '" class="iframe">',
                    '<img src="http://img.youtube.com/vi/' + value['id'] + '/mqdefault.jpg" class="thumnail">',
                '</a>',
                '<p class="title">' + value['title'] + '</p>',
            '</div>');
    });
};