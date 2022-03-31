# Color Clicker Game
In this game there is just this one simple rule:
"Click the color, not the word!"

This Game was developed using Svelte, JavaScript and CSS.

## Usage Example
```html
<script>
import colorclicker from 'https://deno.land/x/colorclicker';
</script>

<div>
    <colorclicker /> 
</div>
```
After winning 5 times in a row, a 'win' event will be dispatched using svelte's own createEventDispatcher. 
After each lose, a 'lose' event will be dispatched.
Currently the win amount is '10 Coins' and the lose amount is '5 coins'

