

user = User.create(username: "tommyboy", email: "tom@gmail.com", password: "tomtom")
product = Product.create(
  name: "First Act FG127 Acoustic Guitar", 
  description: "Perfect for beginning players, the First Act Discovery acoustic guitar has a sunburst finish for a classic look.",
  link: "http://a.co/clvwXHU",
  img: "https://images-na.ssl-images-amazon.com/images/I/71NHaJp1zsL._SL1500_.jpg",
  price: 34.99
  )

  review = user.reviews.build(content: "This is great", product: product)