let i = 0;
while(true) {
    i ++;
    console.log(`num is ${i}`);
    if (i !== 10) {
        continue;
    } else {
        break;
    }
}

let min = 2;
const max = 20;
for (i = min; i <= max; i += 1) {
    if (i % 2 !== 0) {
        continue;
    }  else {
        console.log(i)
    }
}

for (i = 1; i <= 10; i ++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

const n = Number(prompt("введіть раціональне число"));
i = 0;
while (i !== n) {
    if (i !== n) {
        console.log(`число яке є меншим за ваше -> ${i}`);
    } else {
        break;
    }
    i ++;
}

min = 1;
i = min;
while (i <= max) {
    if (i % 3 === 0) {
        i++;  
        continue;
    }
    console.log(i);
    i++;
}