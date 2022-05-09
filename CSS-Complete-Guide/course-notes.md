## CSS Styles
* **DEFINITION:** Cascading style sheets
* The file is parsed top to bottom
* What you want to style is a `property`
* A selector is a additional piece of information that tells css to which element in your DOM (body) you want assign the declaration


### Ways to style an html
* In-style way: where you add the property inside of each html tag of the style you want to apply to the tag
    * This is not recommended because of readability and implementation as you will need to add it into each tag you will need the same
* Style inside the html in the head section
    * This will cause that the html need to re-download for every new page that makes slower 
* **[RECOMMENDED]** With an external css file with extension `.css`


```css
    /* all of this is a rule */
    section { /* this is a selector*/
        background: #ff1b68 /* property: value */
    }
```

## Selectors
 * **elements**: set equal style for these elements
     * You use the elements in the html like `<h1>` or `<section>`....
    * In the CSS file you add the style like `h1 { ... }`
 * **class**: define a class and apply the style to elements that have the same style , adding class attribute 
    * you can reuse the clasess in multiple elements
    * you can also assign multiple classes witha a space between the classes= `class="section-title article-title`
    * You define in the html the class like `..class="blog-post"....`
    * In the CSS file you add the style like `.blog-post { ... }`
* **universal** :using `*` to style everything in your html no matter class or element. 
    * Very inneficient
    * In the CSS file you add the style like `* { ... }`
* **Id**: set style to one specfic element, an ID can only appear 1 time in the file 
    * You define in the html the id like `..id="blog-post"....`
    * In the CSS file you add the style like `#blog-post { ... }`
* **attributes**: using html elements by the attribute they have. Set equal style to all elements with attributes
    * You will take advantage of attributes of elements like Button that has `disabled` attributes
    * In the CSS file you add the style like `[disabled] { ... }` 

## Cascading
* Multiple rules can apply to the same elements and create conflicts to know what rule should be apply and to solve this conflicts CSS uses **specifity**

### Order of specifity (top to bottom)
1. inline styles
2. id selectors
3. class, pseudo-class or attribute selectors
4. tag, pseudo-element universal selectors


## Inheritance
* Means that element inherits styles from the parent element
* It has a low specifity, any direct selection has more specifity and will override inheritance

## Combinator
* Allows to combine multiples selectors by adding the selectors like `#product-overview h1` and it will get more specifity 
* Direct selectors are better than combinators in terms of performance
* adjacent sibling
    * assign the style to the selector that follows directly the first selector
    * elements share the same parent
    * second element comes **immediately** after first element
    * `h2 + p { color: red; }`
    ```html
        <div>
            <h2>Not applied </h2>
            <p>CSS applied</p> <!-- STYLE APPLIED-->
            <h2>Not applied</h2>
            <h3>Not applied</h3>
            <p>Not applied</p>
            <h2>Not applied</h2>
            <p>CSS applied</p>  <!-- STYLE APPLIED-->
        </div>
    ```
* general 
    * Elements share the same parent
    * Second element comes after first element
    * `h2 - p { color: red; }`
    ```html
        <div>
            <h2>Not applied </h2>
            <p>CSS applied</p> <!-- STYLE APPLIED-->
            <h2>Not applied</h2>
            <h3>Not applied</h3>
            <p>CSS applied</p>  <!-- STYLE APPLIED-->
        </div>
    ```
* child
    * second element is a direct child of the first element
    * `div > p { color: red } `
    ```html
        <div>
            <h2>Not applied </h2>
            <p>CSS applied</p> <!-- STYLE APPLIED-->
            <div>Not applied</div>
            <article>
                <p>Not applied</p>
            </article>
            <p>CSS applied</p>  <!-- STYLE APPLIED-->
        </div>
    ```
* descendant
    * Second element is a descendant of the first element
    * `div p { color: red }`
    ```html
        <div>
            <h2>Not applied </h2>
            <p>CSS applied</p> <!-- STYLE APPLIED-->
            <div>Not applied</div>
            <article>
                <p>CSS applied</p> <!-- STYLE APPLIED-->
            </article>
            <p>CSS applied</p>  <!-- STYLE APPLIED-->
        </div>
    ```

|selectors|Properties|Values
|---------|----------|------
|div|backgroud-color|red
|.blog-post|widt|30%
|#main-title|color|#fa923f
|[disabled]|margin|10px
|*|display|block


## Box Model
**Every element in HTML is interpreted as a box in CSS**
### Padding
space between an element's border and the element's content. Controls the space ***inside*** an element
### Border
sorrounds an element and comes directly after de padding
### Margin
space around and element's border, controls the space ***outside*** an element

### Margin Collapsing
if you got 2 elements next to each other with margins between them then it will be collapse into 1 **bigger margin wins**
> if you want to get rid of this you need to use `margin-top` or `margin-bottom`

## Shorthand Properties
Combines values of multiple properties in a single property 

## Box Sizing 
*  `box-sizing: content-box` if we set width of height of the content, not including padding and border (default)
*  `box-sizing: border-box` if we set width of height of the content, include border and padding (most used)

> maybe the only part to use the universal selector `*` is when setting up the `box-sizing: border-box` 

> margin is never included in the box-sizing

## Display

### Block-level elements
* Are rendered as a block and will take all the available horizontal space
* you can set margin-top and margin-bottom and two block-level elements will render in two diffrent lines

### Inline elements
* it will only take up the space they require to fit their content
* it will fit into the same line (as long as the combined content doesn't take up the entire space in which case a line break would be added)
* margin-top and margin-bottom have no efect in the element
* padding-top and padding-bottom won't push the adjacent content away but they will do with the element border
* width and height won't have effect, it is auto to take as much space as required by the content

* inline
    * display in the same line only occupying the space it requires (no margin, padding)
* block
    * takes the full entire width
* inline-block
    * only takes the space needed to show the element, but can also apply the margin and padding of a block

### Display none vs visibility hidden
In the case of `display: none`it will actually removes the element from the document flow, meaning that the element is not visible and it won't "block its position", other elements can (and will) take its place instead

In the case of `visibility: hidden` the element is only hidden but will remain the place (the other elements won't fill the empty spot)

## Pseudo classes 
define style for a special state of an element ex `hover` in an anchor tag
`:class name`
## Pseudo elements
define style of specific part of an element
`::element name `

## Properties worth to remember
* **CORE PROPERTIES:** color, background-color, display, padding, border, margin, width, height

## Classes or ID Selectors

### Classes
* **DEFINITION:** `.some-class {...}`
* Re-usable 
* Allow you to "mark" and name things for styling purposes only

### ID
* **DEFINITION:** `#some-is {...}`
* Only used once per page
* Also got non-CSS meaning (e.g. on-page link)

### !important
* **DON'T USE !important** 
* Overwrites specifity and all other selectors
* Use specifity and rules to style the website according to the needs

