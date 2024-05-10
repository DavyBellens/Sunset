# Overview

This is the code for the exercise of creating a user friendly UI, to allow users to propose locations to their date.

# Approach

Since I had never worked with React Native before, I started by trying to somewhat recreate [Joshua's example](https://github.com/JoshIri360/sunset-matches-exercise).

Once I had more or less recreated its general structure (the different pages, the navigation, the images, ...) I started customizing it. I chose to divide the places into different categories, for which I chose the following:

### Categories

- Restaurant:
  - More popular for people looking for something serious
- Quick Bite:
  - More popular for students
- Drinks:
  - Great choice for both groups
- Coffee:
  - Great choice for both groups
- Bubble Tea:
  - Probably more popular among students
- Ice Cream:
  - Who doesn't love ice cream

## Components

I wanted to maximize modularity and reusability. That's why I divided the components as much as possible. If you look closely, the components for the categories still share a lot of code. I wanted to fix this by creating a more generic component, but this didn't work at the time, and since I had little time I decided this wasn't a priority.

## Images

I also created a custom kind of framework for storing images. In [`components/images.ts`](/Sunset/components/images.ts) I created objects which hold an **image**, a **type** and a **name**. This way I can easily fetch the images and when I'm dynamically mapping my venues, it can retrieve all the information from this object. You can also very easily add extra fields if you want it to carry more information.

### images.ts

```js
const d1 = {
  image: require("/path/to/file"),
  title: "Cat Cafe",
  type: "D",
};

const d2 = {
  image: require("/path/to/file"),
  title: "Morning Brew",
  type: "D",
};
export const drink = [d1, d2];
```

### Drinks.tsx

```js
import { drink } from "./images";
...
{
  drink.map((image, index)=>(
    <View>
      <Link
        href={{
          pathname: "/venue",
          params: {
            name: o.title,
            type: o.type,
          },
        }}
      >
          <View>
            <Image source={o.image} alt={o.title}/>
          </View>
        </Link>
    </View>
  ))
}
```

## Image search

Now when you click on a specific venue from the list, it navigates you to a page which should then display some extra information for this venue. I limited it to the Venue's name and a picture, but if I had more time I would've added maybe an address and/or a price range.

If you look closely, there exists a method to retrieve a specific object by name and type. Type represents the [category](#categories). This is why I created it:

### Name vs name and type

```
2 images per category:

- name => worst case check every image of every category: 2 * 6 = 12 images

- name and type => worst case check every image of the specified type: 2 * 1 = 2 images


50 images per category:

- name => worst case check every image of every category: 50 * 6 = 300 images

- name and type => worst case check every image of the specified type: 50 * 1 = 50 images

```

## Styling

I used the Colors.ts file that was created by the default application when I initialized the project. I didn't use it for the colors however. I put global styling there in a constant which I would then import in individual components. So this is in a way very similar to static html pages "importing" a css file. I renamed the file to [styling.ts](/Sunset/constants/styles.ts) to prevent any possible confusion.

# Demo

https://github.com/DavyBellens/Sunset/assets/91263191/05206321-f55f-4200-9675-226d5e6fd591
