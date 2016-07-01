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




<ul class="specs">
    <li>
        <span>Genus</span>
        <dd>{{critter.genus}}</dd>
    </li>
    <li>
        <span>Habitat</span>


            <dd>{{critter.habitat}}</dd>


    </li>

    <li>
        <span>Weight</span>

        <dd>{{critter.weight}}</dd>


    </li>


    <li>
        <span>Diet</span>


            <dd>{{critter.diet}}</dd>


    </li>


</ul>
