console.log('loaded');

let btnText = document.querySelector('.btn-text');
let i=0;

btnText.addEventListener('click', function(){
    let texts = ['Truth: Bạn được hỏi một người trong đây mọt câu truth tùy ý, họ bắt buộc phải trả lời <br><br>Dare:<br> Để người bên tai trai thổi vào tai', 
    'Truth: <br> Nếu crush của bạn thích bạn thân của bạn thì bạn sẽ làm gì <br><br>Dare:<br> Hay sủa như một con chó', 
    'Truth: <br> Hãy kể về lần lật mặt kinh khủng nhất của bạn <br><br>Dare:<br> Đánh son cho một người bất kỳ không cần phải đẹp ',
    'Truth: <br> Lần dài nhất bạn không tắm là bao lâu <br><br>Dare:<br> Gọi một người bất kỳ và thả thính họ',
    'Truth: <br> Bạn sẽ không thích nhìn ai khỏa thân <br><br>Dare:<br> Ngồi lên đùi một người nào đó',
    'Truth: <br> Nếu bạn đổi giới tính mọt ngày bạn sẽ làm gì <br><br>Dare:<br> Gọi cho bố mẹ nói "tối nay con không về nhà" dập máy luôn',
    'Truth: <br> Ai là người cướp đi nụ hôn đầu của bạn <br><br>Dare:<br> Hãy nhai 1 đống giấy vào mồm',
    'Truth: <br> Kể về lần bạn buồn nhất trong tình yêu <br><br>Dare:<br> Livestream trên mạng xã hội',
    'Truth: <br> Bạn đã hôn bao nhiêu người trong 2 năm qua <br><br>Dare:<br> Hãy đi xin info của một người xa lạ hoặc nhắn tin kết bạn với một người lạ trên mxh',
    'Truth: <br> Tình đầu trong đời của bạn là ai, bạn thích mối tình này không <br><br>Dare:<br> Ra ngoài và hét lên "em đang ế ai yêu em không" ',
    'Truth: <br> Bạn đã làm gì sai trái với luật pháp chưa! đó là gì <br><br>Dare: <br>Chống đẩy 15 cái',
    'Truth: <br> Nói 3 điều bạn thích nhất và 3 điều bạn khong thích nhất về người bên trái của bạn <br><br>Dare:<br> Ăn một thìa cafe đầy mutat hoặc muối',
    'Truth: <br> bạn đã xem porn chưa <br><br>Dare:<br> Gọi điên cho người yêu cũ người yêu hiện tại bảo bạn có thai', 
    'Truth: <br> Nói 3 điều bạn muốn cr làm với bạn <br><br>Dare:<br> Nắm tay mọt người do bạn bè chọn trong 5p',
    'Truth: <br> Hãy nói về lần lật mặt kinh khủng của bạn <br><br>Dare:<br> Đi ra tát 1 đứa ngay lập tức',
    'Truth: <br> Mở máy lên vào nói bạn nhắn tin với ai nhiều nhất <br><br>Dare:<br> Diễn tả 3 điều bạn muốn crush làm với bạn',
    'Truth: <br> Bạn đã từng STALK ai trên mạng xã hội chưa? Đó là ai? <br><br>Dare:<br> Thả thính 2 câu với người đối diện bạn',
    'Truth: <br> Lần nói dối gần đây nhất của bạn là gì <br><br>Dare:<br> Chạm bản thân theo cách bạn muốn được người khác chạm',
    'Truth: <br> Bạn đã hôn public với ai chưa? Đó là ai ? <br><br>Dare:<br> Thi 30s không chớp mắt với người đối diện, ai thua bị tát',
    'Truth: <br> Bạn đã bao giời hối hận với việc chia tay Ex chưa <br><br>Dare:<br> Người bên phải bạn phải theo mọi thứ bạn bảo trong 5p',
    'Truth: <br> Nói một điều mà bạn xấu hổ nhất về bản thân <br><br>Dare:<br> Trong 2 phút bạn có thể làm..updating',
    'Truth: <br> Bóc phốt một người trong đây(Nói điều mà chưa ai biết) <br><br>Dare:<br> Mở album ảnh của bạn cho mọi người xem',
    'Truth: <br> Gu của bạn là gì <br><br>Dare:<br> Nhảy 1 bài bạn thích',
    'Truth: <br> Sceret lớn nhất của bạn là gì <br><br>Dare:<br> Hát một bài hát bạn thích',
    'Truth: <br> Bạn ghét ai nhất tỏng đây <br><br>Dare:<br> Tỏ tình với cr của bạn đi nàoo',
    'Truth: <br> Crush của bạn là ai? <br><br>Dare:<br> Mở history 1 tuần gần đây của bất kỳ ứn dụng nào cho mọi người xem đi',
    'Truth: <br> Nói 2 điều bạn muốn hiện tại <br><br>Dare:<br> Để bạn bè đăng lên mạng xã hội một ảnh xấu của bạn và để trong 24h',
    'Truth: <br> Điều bạn hối hận nhát là gì <br><br>Dare:<br> Hôm má người bên trái bạn', 
    'Truth: <br> Đã bao giờ bạn là "Trà Xanh" trong một mối tình? Nếu có thì là năm bao nhiêu? <br><br>Dare:<br> Nhắn với Ex bạn muốn yêu lại họ',
    'Truth: <br> Bạn đã từng crush ai trong này <br><br>Dare:<br> Ôm một người khác với giới tính của bạn ở đây'

]
    let rand = Math.floor(Math.random()*texts.length);
    let randomText =texts[rand]
    console.log(randomText);
    i++;
    let displayText = document.querySelector('.random-text');
    displayText.innerHTML=randomText;

    let displaycount = document.querySelector('.count');
    displaycount.innerHTML=i;
})