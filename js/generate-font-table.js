const main = document.querySelector('main');

let table1 = "";
let table2 = "<div class='margin-top'></div>";
let tableMerged = "";

const hex_string = [
  {hex: "0x41", string : "A"} ,
  {hex: "0x42", string : "B"} ,
  {hex: "0x43", string : "C"} ,
  {hex: "0x44", string : "D"} ,
  {hex: "0x45", string : "E"} ,
  {hex: "0x46", string : "F"} ,
  {hex: "0x47", string : "G"} ,
  {hex: "0x48", string : "H"} ,
  {hex: "0x49", string : "I"} ,
  {hex: "0x4a", string : "J"} ,
  {hex: "0x4b", string : "K"} ,
  {hex: "0x4c", string : "L"} ,
  {hex: "0x4d", string : "M"} ,
  {hex: "0x4e", string : "N"} ,
  {hex: "0x4f", string : "O"} ,
  {hex: "0x50", string : "P"} ,
  {hex: "0x51", string : "Q"} ,
  {hex: "0x52", string : "R"} ,
  {hex: "0x53", string : "S"} ,
  {hex: "0x54", string : "T"} ,
  {hex: "0x55", string : "U"} ,
  {hex: "0x56", string : "V"} ,
  {hex: "0x57", string : "W"} ,
  {hex: "0x58", string : "X"} ,
  {hex: "0x59", string : "Y"} ,
  {hex: "0x5a", string : "Z"} ,
  {hex: "0x61", string : "a"} ,
  {hex: "0x62", string : "b"} ,
  {hex: "0x63", string : "c"} ,
  {hex: "0x64", string : "d"} ,
  {hex: "0x65", string : "e"} ,
  {hex: "0x66", string : "f"} ,
  {hex: "0x67", string : "g"} ,
  {hex: "0x68", string : "h"} ,
  {hex: "0x69", string : "i"} ,
  {hex: "0x6a", string : "j"} ,
  {hex: "0x6b", string : "k"} ,
  {hex: "0x6c", string : "l"} ,
  {hex: "0x6d", string : "m"} ,
  {hex: "0x6e", string : "n"} ,
  {hex: "0x6f", string : "o"} ,
  {hex: "0x70", string : "p"} ,
  {hex: "0x71", string : "q"} ,
  {hex: "0x72", string : "r"} ,
  {hex: "0x73", string : "s"} ,
  {hex: "0x74", string : "t"} ,
  {hex: "0x75", string : "u"} ,
  {hex: "0x76", string : "v"} ,
  {hex: "0x77", string : "w"} ,
  {hex: "0x78", string : "x"} ,
  {hex: "0x79", string : "y"} ,
  {hex: "0x7a", string : "z"} ,
  {hex: "0x30", string : "0"} ,
  {hex: "0x31", string : "1"} ,
  {hex: "0x32", string : "2"} ,
  {hex: "0x33", string : "3"} ,
  {hex: "0x34", string : "4"} ,
  {hex: "0x35", string : "5"} ,
  {hex: "0x36", string : "6"} ,
  {hex: "0x37", string : "7"} ,
  {hex: "0x38", string : "8"} ,
  {hex: "0x39", string : "9"} ,
  {hex: "0x21", string : "!"} ,
  {hex: "0x40", string : "@"} ,
  {hex: "0x23", string : "#"} ,
  {hex: "0x24", string : "$"} ,
  {hex: "0x25", string : "%"} ,
  {hex: "0x5e", string : "^"} ,
  {hex: "0x26", string : "&"} ,
  {hex: "0x2a", string : "*"} ,
  {hex: "0x28", string : "("} ,
  {hex: "0x29", string : ")"} ,
  {hex: "0x5f", string : "_"} ,
  {hex: "0x2d", string : "-"} ,
  {hex: "0x2b", string : "+"} ,
  {hex: "0x3d", string : "="} ,
  {hex: "0x7b", string : "{"} ,
  {hex: "0x7d", string : "}"} ,
  {hex: "0x5b", string : "["} ,
  {hex: "0x5d", string : "]"} ,
  {hex: "0x5c", string : "\/"} ,
  {hex: "0x7c", string : "|"} ,
  {hex: "0x3a", string : ":"} ,
  {hex: "0x3b", string : ";"} ,
  {hex: "0x22", string : "\""},
  {hex: "0x3c", string : "<"} ,
  {hex: "0x3e", string : ">"} ,
  {hex: "0x2c", string : ","} ,
  {hex: "0x2e", string : "."} ,
  {hex: "0x3f", string : "?"} ,
  {hex: "0x2f", string : "/"} ,
  {hex: "0x20", string : " "}
];

hex_string.map((element, index) => { 
    // console.log(element);
    if(index < 48) {
            const header = `
            <div class="border">
                <div class="font-header"> ${element.hex} | ${element.string} </div>
                <div class="font-writing"></div>
            </div>`;
            table1 += header;
     } else { 
            const header = `
            <div class="border">
                <div class="font-header"> ${element.hex} | ${element.string} </div>
                <div class="font-writing"></div>
            </div>`;

            table2 += header
     }
        tableMerged = `<div class="first-page">${table1}</div>` + `<div class="second-page">${table2}</div>`;
})

main.innerHTML = tableMerged;
