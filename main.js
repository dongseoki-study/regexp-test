console.log(123)

let str = `
010-1234-5678
thetest@gmail.com
https://www.abs.com/?apikey=aaa&bbbb=ddd
The quic brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:8080
`;


// const regexp = new RegExp('the', 'gi');
// const regexp = /the/gi;

// console.log(str.match(regexp));


// const regexp = /fox/gi;
// //console.log(regexp.test(str));

// //console.log(str.replace(regexp, 'AAA'));
// str = str.replace(regexp, 'AAA');
// console.log(str);

// const regexp = /the/gi;

// console.log(str.match(regexp));

// console.log(str.match(/the/gi));

//console.log(str.match(/./gi)); // X
//console.log(str.match(/\./gi)); // O

// console.log(str.match(/\.$/gi)); // 전체 문자열의 끝
// console.log(str.match(/\.$/gim)); // 각줄의 끝을 찾음
// console.log(
//     str.match(/d$/gm)
// );

// console.log(
//     str.match(/^t/gim)
// );

// console.log(
//         str.match(/http/gim)
//     );

// console.log(
//     str.match(/h..p/gim)
// );


// console.log(
//     str.match(/fox|dog/gim)
// );

// console.log(
//     str.match(/https?/g)
// );

// console.log(
//     str.match(/d{2}/g)
// );

// console.log(
//     str.match(/d{2,}/g)
// );

// console.log(
//     str.match(/d{2,3}/g)
// );

// console.log(
//     str.match(/\b\w{2,3}\b/g) // 숫자나 문자가 아닌 경계를 둔다
// );

// console.log(
//     str.match(/[fox]/g)
// );
// console.log(
//     str.match(/[fox]{1,}/g)
// );

// console.log(
//     str.match(/\w/g) // 한글은 제외된다.
// );

// console.log(
//     str.match(/\bf\w{1,}\b/g)
// );

// console.log(
//     str.match(/\d{1,}/g)
// );

// console.log(
//     str.match(/\s/g)
// );

// const h = ` the hello   world   !

// `;

// console.log(
//     h.replace(/\s/g, '')
// );

// console.log(
//     str.match(/.{1,}(?=@)/g)
// )

console.log(
    str.match(/(?<=@).{1,}/g)
)
