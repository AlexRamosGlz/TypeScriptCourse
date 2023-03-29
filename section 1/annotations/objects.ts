const profile = {
  userName: "alex",
  age: 20,
  coord: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): void {},
};

//objects destructuring with type annotation
const { age, userName }: { age: number; userName: string } = profile;

//destructuring nested objects with type annotation
const {
  coord: { lat, lng },
}: { coord: { lat: number; lng: number } } = profile;
