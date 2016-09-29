<a href="angular.jsp">Back to List</a>
<div class="critter-images">
    <img ng-src="{{img}}"
         class="critter"
         ng-repeat="img in critter.images"
         ng-class="{active: mainImageUrl==img}">
</div>
<h1>{{critter.name}}</h1>
<p>{{critter.description}}</p>
<ul class="critter-thumbs">
    <li ng-repeat="img in critter.images">
        <img ng-src="{{img}}" ng-click="setImage(img)">
    </li>
</ul>

<hr/>
<div class="uk-grid" data-uk-grid-margin>
    <div class="uk-width-1-4">
        <span class="bold">Genus</span>
        <dd>{{critter.genus}}</dd>
    </div>
    <div class="uk-width-1-4">
        <span class="bold">Habitat</span>
        <dd>{{critter.habitat}}</dd>
    </div>
    <div class="uk-width-1-4">
        <span class="bold">Weight</span>
        <dd>{{critter.weight}}</dd>
    </div>
    <div class="uk-width-1-4">
        <span class="bold">Diet</span>
        <dd>{{critter.diet}}</dd>
    </div>
</div>

