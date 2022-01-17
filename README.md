# w3_band
Tự làm một trang web theo mẫu
- Đừng có đặt tên trùng !!!!!

- nextElementSibling: là lấy ra một node anh chị em liền kề 
- classList.contains('subnav') dùng để kiểm tra xem có tonn62 tại trong class hay không
- Nút bấm 48px để dể bấm hơn.

    -   display: flex; // Cái này viết trong container
        + Thì giá trị của flex-derection sẽ là Row -> main axis sẽ nằm ngang // cái này nếu gọi display flex thì sẽ tự động set là row -> viết ở thẻ contanier
        + Truyền flex: 1 thì thẻ chứa css này sẽ chiếm hết phần còn lại của box theo chiều của main axis // cái này viếc cho thẻ cha
        + Nếu có nhiều item thì flex:1 nó sẽ chia chia 3 // cái này viết cho item
        + flex-basis: <chỉ số>.... Cái này giúp chia tỉ lệ item theo nhiều của main axis // cái này viết trong item
        + Muốn cho item xuống dòng thì flex-wrap: <wrap>. cross axis end ở đâu thì item rớt ở đó. // Cái này viết cho thẻ cha 
        + aline-items: flex-star, flex-end để quy định cross axis trên dưới ntn // viết vào thẻ cha
        + flex-derection: <row|colum>-reverse sẽ đảo nhiều cross|main axis // viết ở thẻ container 
    
    CĂN GIỮA THÌ DISPLAY:FLEX RỒI  VÀO THẺ CON MARGIN:AUTO LÀ LỤM LÚA...

    Muốn chia 2 content ra 2 bên thì display:flex... sau đó justyfine-content: between. 
    space-between thì 2 đầu dính vào mép trình duyệt,
    space-around thì chừa 2 bên nhưng hai bên nhỏ bên trong lớn,
    space-evenly thì chia đều 