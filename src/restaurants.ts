// 데이터 타입을 먼저 정하기
// 상대 페어가 내가 의도한 대로 구현을 하는지
// 코드만 보고도 구현을 하는지

type Restaurant = {
  category: string;
  name: string;
  distance?: number;
  menu: string[];
};

class RestaurantCollection {
  restaurants: Restaurant[];

  constructor() {
    this.restaurants = [];
  }

  add(restaurant: Restaurant) {
    this.restaurants.push(restaurant);
  }

  filterByCategory(category: string): Restaurant[] {
    return this.restaurants.filter(
      (restaurant) => restaurant.category === category
    );
  }
}
