# Brothers Photography Modification Guide 
## Photo Sections
1) Welcome Page
2) Home Page Images Sliding
3) Recently On Instgram
4) Blog Page

### Welcome Page
- Place to Add Photos  https://github.com/Bablukanna6/brothersphotographyj/tree/main/images/home
- Place to Modify Code https://github.com/Bablukanna6/brothersphotographyj/blob/main/index.html
- Example
```html
  <div class="slideshow">
      <img src="images/home/1.jpg" alt="Image 1" />
      <img src="images/home/2.jpg" alt="Image 2" />
      <img src="images/home/3.jpg" alt="Image 3" />

      <img src="images/home/4.jpg" alt="Image 4" />
    </div>
```

### Home Page Images Sliding
- Place to Add Photos https://github.com/Bablukanna6/brothersphotographyj/blob/main/js/image.js
- Place to Modify Code https://github.com/Bablukanna6/brothersphotographyj/blob/main/js/image.js
- Example
```java script
  const crousalImage = [
  "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224910419-7VEZZ4N095S2PL3PBZIC/SJR_Upi+Paul+Paris+preview_00037.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224920312-8BTPT9FKBINDZ6KR7BNP/HD_DC_SBJR-114.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224581777-VS1L3RYSKWZ5JIL1AI5C/RS_0025A.JPG?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224613955-MAXD4YS5OZSCWOGUQ6VH/Brij+holi%2C+Mumbai+A7s.jpg?format=2500w",

  "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224613955-MAXD4YS5OZSCWOGUQ6VH/Brij+holi%2C+Mumbai+A7s.jpg?format=2500w"
];
```

### Recently On Instgram
- Place to Add Photos https://github.com/Bablukanna6/brothersphotographyj/tree/main/images/recently-on-instagram
- Place to Modify Code https://github.com/Bablukanna6/brothersphotographyj/blob/main/js/components/header.js
- Example
```html
<div class="galary">
    <img
      src="../../images/recently-on-instagram/1.jpg"
      alt=""
      width="200px"
    />

  <img
      src="../../images/recently-on-instagram/2.jpg"
      alt=""
      width="200px"
    />
  </div>
```
### Blog Page
- Place to Add Photos  https://github.com/Bablukanna6/brothersphotographyj/edit/main/db/blog.js
- Place to Modify Code https://github.com/Bablukanna6/brothersphotographyj/edit/main/db/blog.js
- Example
```json
{
    id: 2,
    title: "Diya + Saurav: East Meets West",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate iusto velit aperiam numquam excepturi nobis placeat laborum obcaecati fugit, porro voluptatibus qui eligendi vero nostrum amet nesciunt ut facere ab distinctio hic neque! Voluptate aperiam saepe quis voluptatem accusamus inventore expedita quae repudiandae error dolores eaque neque, molestiae consequuntur quod! Nihil quae iste blanditiis. Accusamus ut modi fuga voluptatem consequuntur repudiandae optio ipsam quisquam soluta error amet tenetur nesciunt vitae voluptatibus, obcaecati incidunt facilis, accusantium quia. Assumenda, corrupti eum.",
    releaseDate: "21 Aug 2024",
    images: [
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1609420521104-03FMTXFTIRIQQHALG7LX/SCBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1609326691960-DIECNJQLKSCQSWZ7OBL8/KGBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1609175478718-RGZBHFXO797CVORI79OC/SumoBlog_1.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1609093523996-2Z5PB8MWNJQ5BF54LYTE/VCBlog_0.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1609093523996-2Z5PB8MWNJQ5BF54LYTE/VCBlog_0.jpg?format=1000w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1609084695053-R8DZF5NVE71L7P336ZBB/PrinnyBlog_22.jpg?format=750w",
      "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1608710204611-T98CBU2YTBUBTIMX7MG0/KCBlog_1.jpg?format=1000w",
    ],
  },
 ```

### Update Blog Template link
Link :- https://github.com/Bablukanna6/brothersphotographyj/blob/main/db/blog.js

```
  {
    id: 6,
    title: "",
    description:"",
    releaseDate: "",
    images: [
     
    ],
  },
```
