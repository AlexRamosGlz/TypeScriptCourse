
/**
 *  Subclasses should remain compatible with the subclass should remain compatible with the behavior of the superclass.
 *  When overriding a method, extend the base behavior rather replacing it with something else entirely.
 *  
 *  The substitution principle is a set of checks that help predict whether a subclass remains compatible with the code that was able to work 
 *  with objects of the superclass.
 */

class Animal {
    
}

class Cat extends Animal{

    public feed(cat: Cat): void {
        // feed a cat
    }
}


class subclass1 extends Cat{
    /**
     *  1 Parameter types in a method of a subclass should match or be more abstract than parameter types in the method of the
     *    superclass
     */
    // GOOD
    // If you pass an object of this subclass instead of an object of the superclass to the client code, everything would still work fine.
    // The method can feed all animals, so it can still feed any cat passed by the client
    public feed(cat: Animal): void {
        // feed an Animal
    }
}


class Calculator {
    /**
     *  2 The return type in a method of a subclass should match or be a subtype of the return type in the method of the superclass
     */

    // Our base method returns a sum of two number so the return type is a number
    public sum(a: number, b: number): number {
        return a + b;
    }
}

class ScientificCalculator extends Calculator {

    // BAD
    // but the subclass overrides the sum method and then assigns the return type as string, Now the client code who uses the method will breake
    // since it exptects to return a number instead it got a string!.
    public sum(a: number, b: number): string {
        return `${a} + ${b}`;
    }
}

























// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: EXAMPLE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// class Project { 
//     private allDocs: Doc[];
//     private writableDocs: WriteableDocument[];

//     constructor(allDocs: Doc[], writableDocs: WriteableDocument[]) {
//         this.allDocs = allDocs,
//         this.writableDocs = writableDocs;
//     }

//     openAll(): void {
//         this.allDocs.forEach((doc) => {
//             doc.open();
//         })
//     }

//     saveAll(): void {
//         this.writableDocs.forEach((doc) => {
//             doc.save();
//         })
//     }
// }

// class Doc { 
//     private data: string;
//     protected filename: string;

//     constructor(data: string, filename: string) {
//         this.data = data;
//         this.filename = filename;
//     }

//     public open(): void {
//         console.log(`Opening ${this.filename} Document`);
//     }
// }

// class WriteableDocument extends Doc{

//     constructor(data: string, name: string) {
//         super(data, name);
//     }

//     public save(): void {
//         console.log(`Saving ${this.filename} document`);
//     }
// }

// const doc1 = new Doc('Design Patterns', 'DesignPatterns');
// const doc2 = new Doc('cleand code', 'CleanCode');

// const writDoc1 = new WriteableDocument('myDoc', "my word doc");
// const writDoc2 = new WriteableDocument('myDoc', "my excel doc");

// export const p = new Project([doc1, doc2], [writDoc1, writDoc2]);

