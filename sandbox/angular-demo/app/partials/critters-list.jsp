<main id="content">
    <div class="am-middle">
        <div class="uk-container uk-container-center">
            <div class="uk-grid" data-uk-grid-margin>

                <div class="uk-width-small-2-10">
                    <!--Sidebar content-->

                    Search: <input ng-model="query">
                    Sort by:
                    <select ng-model="orderProp">
                        <option value="name">Alphabetical</option>
                        <option value="age">Newest</option>
                    </select>
                </div>

                <p>&nbsp;</p>

                <div class="uk-width-small-7-10">
                    <!--Body content-->

                    <ul class="critters">
                        <li ng-repeat="critter in critters | filter:query | orderBy:orderProp"
                            class="thumbnail critter-listing">
                            <a href="#/critters/{{critter.id}}" class="thumb"><img ng-src="{{critter.imageUrl}}"
                                                                                   alt="{{critter.name}}"></a>
                            <a href="#/critters/{{critter.id}}">{{critter.name}}</a>

                            <p>{{critter.snippet}}</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</main>
