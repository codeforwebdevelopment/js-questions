

class Example { 
      static convertData() { 
        console.log("Static method"); 
      } 
    }

// To call convertData method with dot notation

    Example.convertData(); 



export class ExportxlsComponent {
  static toExportFileName(excelFileName: string): string {
    return `${excelFileName}_export_${new Date().getTime()}.xlsx`;
  }
//   fs.saveAs(data, ExportxlsComponent.toExportFileName(excelFileName));
}

// Here we create toExportFileName static method which returns the file name. you can call directly using the class name.
export class Hero {
    static nextId = 0;
    static heroes: Hero[] = [
        new Hero(
        0,
        'Hercules',
        'happy',
        new Date(1970, 1, 25),
        'https://www.imdb.com/title/tt0065832/',
        325
        ),
        new Hero(1, 'Dr Nice', 'happy'),
        new Hero(2, 'Narco', 'sad' ),
        new Hero(3, 'Windstorm', 'confused' ),
        new Hero(4, 'Magneta')
        ];
        constructor(
            public id = Hero.nextId++,
            public name?: string,
            public emotion?: string,
            public birthdate?: Date,
            public url?: string,
            public rate = 100,
            ) {}
            clone(): Hero {
                return Object.assign(new Hero(), this);
                }
               }

               // let weg = this.wfqew.split('/')

// const params = new URLSearchParams(this.sdfas);

// let weg = params.get("https://www.youtube.com/watch?v");