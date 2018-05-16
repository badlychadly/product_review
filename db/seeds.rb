

u1 = User.create(username: "tommyboy", email: "tom@gmail.com", password: "tomtom")
u2 = User.create(username: "markman", email: "mark@gmail.com", password: "mark")
u3 = User.create(username: "amy", email: "amy@gmail.com", password: "amy")
u4 = User.create(username: "pam", email: "pam@gmail.com", password: "pam")
u5 = User.create(username: "doris", email: "doris@gmail.com", password: "doris")
u6 = User.create(username: "aaron", email: "aaron@gmail.com", password: "aaron")


p1 = Product.create(
  name: "First Act FG127 Acoustic Guitar", 
  description: "Perfect for beginning players, the First Act Discovery acoustic guitar has a sunburst finish for a classic look.",
  link: "http://a.co/clvwXHU",
  img: "https://images-na.ssl-images-amazon.com/images/I/71NHaJp1zsL._SL1500_.jpg",
  price: 34.99
  )
  p2 = Product.create(name: "iRobot Roomba 690 Robot Vacuum", 
    description: "Connect to clean from anywhere with the Roomba 690 robot vacuum. The patented 3-Stage Cleaning System is specially engineered to loosen, lift, and suction everything from small particles to large debris from carpets and hard floors.", 
    link: "http://a.co/cGACzV0", 
    img: "https://images-na.ssl-images-amazon.com/images/I/71syD-znTDL._SL1500_.jpg", 
    price: 299.99)

  p3 = Product.create(name: "Instant Pot Ultra 6 Qt 10-in-1 Multi- Use Programmable Pressure Cooker", 
    description: "Instant Pot Ultra 10 In 1 Multi-Use Programmable Cooker is the next generation in kitchen appliances. Designed for the home chef looking for a greater degree of customization and control for even greater precision cooking. The Ultra combines the functions of a Pressure Cooker, Slow Cooker, Rice/Porridge Cooker, Cake Maker, Yogurt Maker, Saute/Searing, Steamer, Warmer, Sterilizer, and, a truly new and unique feature, the Ultra program. The 'Ultra' provides complete custom programming for pressure and non-pressure cooking. Now, one can set the exact parameters desired to achieve perfect results each and every time. With the 'Altitude' adjustment, the guesswork is eliminated from a recipe conversion providing a more precise cooking time. Designed with a large, blue LCD display with a 'Cooking Indicator' to provide one a clear visual on the progress of your dish from preheating, cooking, and Keep Warm. A central dial with a simple turn and press provides added precision in program selection and adjustments.", 
    link: "http://a.co/hw7nSo8", 
    img: "https://images-na.ssl-images-amazon.com/images/I/71n5ICKunsL._AC_SR201,266_.jpg", 
    price: 99.96)

  p4 = Product.create(name: "Ninja BL610 Professional Blender ", 
    description: "The Ninja Professional Blender 1000 features a sleek design and outstanding performance with 1000 watts of professional power. Ninja Total Crushing blades gives you perfect ice crushing, blending, pureeing, and controlled processing.", 
    link: " http://a.co/dpyC99e", 
    img: "https://images-na.ssl-images-amazon.com/images/I/81rbrpsLi0L._SL1500_.jpg", 
    price: 79.00)

  p5 = Product.create(name: "Kimilar [3-Pack] Fitbit Versa Screen Protector, Waterproof Tempered Glass Screen            Protector for Fitbit Versa Smartwatch", 
    description: "This Kimilar 3-Packs Tempered Glass Screen Protector for Fitbit Versa gives your smartwatch maximum protection from drops, scratches, bangs and scrapes with industry-leading glass strength of 9H hardness.", 
    link: "http://a.co/aDXCtb1", 
    img: "https://images-na.ssl-images-amazon.com/images/I/71fB3BIA2VL._SL1000_.jpg", 
    price: 	7.79)

  rev1 = Review.create(content: "This is great", user: u6, product: p1)
  rev2 = Review.create(content: "I wouldn't use this", user: u1, product: p2)
  rev3 = Review.create(content: "What a terrible product!!", user: u5, product: p3)
  rev4 = Review.create(content: "Changed my life!", user: u2, product: p4)
  rev5 = Review.create(content: "Wow incredible", user: u4, product: p5)
  rev6 = Review.create(content: "So cheap wow! Terrible.", user: u3, product: p1)
  rev8 = Review.create(content: "Why did I buy this", user: u6, product: p2)
  rev9 = Review.create(content: "I can't see why you wouldn't buy this", user: u1, product: p3)
  rev10 = Review.create(content: "Everyone needs one of these!", user: u3, product: p4)
  rev11 = Review.create(content: "You need this product", user: u3, product: p5)
  rev12 = p2.reviews.build(content: "Love", user: u3)
  rev13 = p2.reviews.build(content: "Love", user: u5)
  rev14 = p2.reviews.build(content: "Love", user: u4)
  p2.save

  User.all.each do |user| 
    p2.upvote_by user
    p5.downvote_from user
  end

  User.first_three.each do |user|
    p1.upvote_by user
    p3.upvote_by user 
    p4.upvote_by user
  end

  User.last_three.each do |user|
    p1.downvote_from user
    p4.downvote_from user
    p3.downvote_from user unless user == User.last_three.last
  end
  
