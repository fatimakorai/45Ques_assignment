function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' The Great'
    }
}

const magicians2: string[] = ['John', 'Tom', 'Winslet'];
make_great(magicians2);
console.log(magicians2);
