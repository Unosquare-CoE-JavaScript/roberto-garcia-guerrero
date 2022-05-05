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
    * `h2 -p { color: red; }`
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
