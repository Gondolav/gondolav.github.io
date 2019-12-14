---
layout: article
title: "Where to eat safely in Chicago: gaining insight from food establishments inspections"
show_subscribe: false
license: false
comment: false
show_date: false
show_edit_on_github: false
sidebar:
  nav: en
article_header:
  type: overlay
  theme: dark
  background_color: '#203028'
  background_image:
    gradient: 'linear-gradient(135deg, rgba(34, 139, 87 , .4), rgba(139, 34, 139, .4))'
    src: /chicago-skyline2.jpg
---
<!--more-->

# The setting

**Chicago** is the third most populous and the second most visited city in the United States. It is an international hub for finance, culture, commerce, industry, education, technology, telecommunications and transportation. The Chicago area [has one of the highest gross domestic product (GDP) in the world](https://www.bea.gov/system/files/2018-09/gdp_metro0918_0.pdf) and the [most balanced economy in the U.S.](http://www.worldbusinesschicago.com/economy), due to its high level of diversification. Moreover, the *Windy City* ranks first globally in the [2018 Time Out City Life Index](https://www.timeout.com/chicago/news/chicago-named-the-worlds-best-city-for-having-it-all-012918), a quality of life survey, and seventh for the highest number of [ultra-high-net-worth residents](https://www.chicagobusiness.com/finance-banking/these-are-cities-most-ultra-rich-people): roughly 3,300 residents are worth more than $30 million. Nevertheless, Chicago is also a city of contradictions and inequalities: according to the 2008-2012 U.S. Census Bureau's American Community Survey, about 18.3% of families and 22.1% of the population lived below the poverty line.

# Inspections and food establishments

Chicago is home to 16,000 food establishments like restaurants, grocery stores, bakeries, wholesalers, lunchrooms, mobile food vendors and more. The city has many upscale dining establishments as well as many ethnic restaurant districts, including the Mexican American neighbourhoods, such as Pilsen along 18th street, and La Villita along 26th Street; the Puerto Rican enclave of Paseo Boricua in the Humboldt Park neighbourhood; Greektown, along South Halsted Street, immediately west of downtown; Little Italy, along Taylor Street; Chinatown in Armour Square; Polish Patches in West Town; Little Seoul in Albany Park around Lawrence Avenue; Little Vietnam near Broadway in Uptown; and the Desi area, along Devon Avenue in West Ridge.

To ensure the compliance with the [Chicago Food Code](https://www.chicago.gov/content/dam/city/depts/cdph/food_env/general/Food_Protection/FoodCodeRules_Effective_Feb12019.pdf), the **Chicago Department of Public Health (CDPH)** conducts routine, unannounced food inspections, also called *canvass inspections*. The goals of these inspections are:
- to ensure the immediate safety of restaurant customers and employees;
- to prevent foodborne illness outbreaks.
- to help the public learn which restaurants adhere to public health regulations.

CDPH inspects most food establishments twice a year, with other establishments deemed as lower risk inspected once a year or once every other year. In addition to routine canvass inspections, CDPH also conducts license inspections for newly-opened businesses, complaint inspections in response to submitted concerns or suspected food poisoning, and re-inspections for issues arising from canvass inspections that require correction.

The inspections' results are available [online](http://webapps1.chicago.gov/healthinspection/inspection.jsp).

# The analysis

We analyzed food inspections' results to give an overview of the city's food safety over the last decade. The aim was to identify patterns at the social and geographical levels, focusing our efforts in pinpointing **where to eat safely in Chicago**. With our work, we hope to raise awareness about the Chicago's food safety landscape and instruct people on the quality of the establishments they regularly visit.

In this article, we first take a look at the different facilities' predispositions to inspection failure. Then, we compare famous fast-food restaurant chains, highlighting very interesting findings, and we also present some curious facts about Food Code violations. Next, we address our main objective: showing which neighbourhoods are the safest food-wise and explore the evolution of the neighbourhoods' safety throughout time. Finally, at the end of the article, we assess the usefulness and the potential effects of the inspections.

We use the [Chicago Metropolitan Agency for Planning website](https://www.cmap.illinois.gov/data/community-snapshots) to interpret in a deeper way our results, as they provide community snapshots that summarize demographics, housing, employment, transportation habits, retail sales, property values, and land use in all 77 Chicago community areas, which correspond to the "neighbourhoods" we are considering.
We have built small dataframes with the different features we found interesting on the best and worse Community Areas according to the two main aspects we considered, namely the `RISK 1 (HIGH)` rate and the `PASS` rate.

## Risk analysis per neighbourhood

\* insert risk map \*

The areas with the most important `RISK 1 (HIGH)` rate are mostly located in the Central, Far North, Northwest and North sides of Chicago. This is rather surprising since these parts of the city are mostly populated with middle-class and well-off populations. On the other hand, the Southwest and South sides of Chicago tend to have a lower risk rate, i.e. in districts with a much lower median income.

|community_area|population|ethnicity|education/higher(%)|education/high_school(%)|education/less(%)|income/median($)|income/less_50000(%),income/more_100000(%)|
|---|---|---|---|---|---|---|---|---|
|WEST GARFIELD PARK|17163|black 95%|11|62|27|23250|75|4|
|WEST ENGLEWOOD|29929|black 91%|14|65|12|28000|76|7|
|EAST GARFIELD PARK|19996|black 88%|22|57|22|13100|73|8|
|ENGLEWOOD|25075|black 95%|12|60|26|19800|84|4|
|BRIDGEPORT|33637|asian 33% white 33% hispanic 24%|35|43|20|45700|53|20|

Obviously, `Englewood` and `West Englewood` as well as `East Garfield Park` and `West Garfield Park` are neighbour community areas. In general, these neighbourhoods present similar ethnicity, education level and income level. Moreover, all these 3 indicators have very low values overall: with the exception of `Bridgeport`, in these neighbourhoods 75\% of the population earns less than 50'000 \$ a year and less than 20\% of the inhabitants have a university degree. Here, `Bridgeport` looks more like an outlier with its different ethnicity and its median income, and its higher education level being as twice as high as the others.

Consequently, from these results, a good risk rate seems very surprisingly to be linked to the (lack of) wealth and education of a community area.

|community_area|population|ethnicity|education/higher(%)|education/high_school(%)|education/less(%)|income/median($)|income/less_50000(%)|income/more_100000(%)|
|---|---|---|---|---|---|---|---|---|
|LINCOLN SQUARE|41715|white 64% hispanic 17% asian 11%|67|25|8|71700|36|35|
|EAST SIDE|23737|hispanic 80%|17|52|31|43200|55|14|
|NORWOOD PARK|37089|white 81%|46|46|8|74100|33|37|
|ARMOUR SQUARE|13455|asian 73%|27|40|33|26500|68|15|
|EDISON PARK|11605|white 83%|54|41|5|99200|27|50|

It is quite hard to find common patterns to these five community areas. Geographically, four of them are located in the suburbs of Chicago, while `Armour Square` is a central neighbourhood. The ethnicity is also heterogeneous, except for the African-American population that appears to be minoritary. As for the education and income levels, they vary widely from one community area to the other, e.g. from a poor median income of 26'500 \$ per year in `Armour Square` to a very high 99'200 \$ per year in `Edison Park`.

Hence, a bad risk rate of a Chicago neighbourhood doesn't seem to be related to its location, its ethnicity, its education level or its income level.

## Result analysis per neighbourhood

\* insert result map \*

The central district `Loop` as well as the edge areas of the city share the highest rates when regarding the pass inspections. They are wealthy neighbourhoods, which could explain why a peculiar care seems to be taken in making food facilities safe. We clearly cannot say the same about the South Side of Chicago, which gathers the Community Areas with highest `FAIL` rates.

|community_area|population|ethnicity|education/higher(%)|education/high_school(%)|education/less(%)|income/median($)|income/less_50000(%)|income/more_100000(%)|
|---|---|---|---|---|---|---|---|---|
|CLEARING|25891|hispanic 53% white 43%|26|59|15|62400|40|23|
|O'HARE|12377|white 80%|45|44|11|49300|51|13|
|ASHBURN|43792|black 50% hispanic 40%|30|55|15|66600|35|27|
|MOUNT GREENWOOD|19277|white 85%|43|53|4|94700|23|46|
|LOOP|35880|white 62% asian 17% black 11%|83|15|2|103300|24|52|

These 5 Community Areas are mainly located in the suburbs of Chicago and have quite diverse populations in terms of ethnicity, education level and income level. Nevertheless, we can notice that at least 25\% of their population has a university degree and that they all have a median income of 50'000 dollars per year or more, two high statistics. In particular, `Loop`, the central business district in the downtown area of the city and home to Chicago's commercial core, has a huge university degree rate (83\%) and median income (100'000 \$ per year). On the other hand, almost a quarter of this community area's population earns less than 50'000 \$ per year, proof that there are important inequalities even within a single neighbourhood.

Overall, given these results, we could hypothesize that high pass rates are related to prosperous neighbourhoods.

|community_area|population|ethnicity|education/higher(%)|education/high_school(%)|education/less(%)|income/median($)|income/less_50000(%)|income/more_100000(%)|
|---|---|---|---|---|---|---|---|---|
|OAKLAND|6645|black 90 %|35|49|16|28300|70|11|
|WOODLAWN|23268|black 83%|36|50|14|25100|71|10|
|GRAND BOULEVARD|22313|black 92%|36|49|15|32000|64|14|
|GRAND CROSSING|31766|black 96%|25|61|14|27000|70|7|
|WASHINGTON PARK|11502|black 94%|23|59|18|25400|76|16|

The first two things to notice about this dataframe are that the ethnicity of the five worst community areas in terms of pass rate is predominantly African-American and that these five neighbourhoods are very close to each other geographically. If the percentage of the population with a university degree is not that low, the median income on the other hand is very limited. On average, 70\% of the population of these neighbourhoods makes less than 50'000 \$ per year.

The conclusion to draw here is rather clear: a low pass rate seems to be closely related to the (lack of) wealth and education of a Community Area. In particular, districts with an African-American population appear to be more struck by food safety issues.

## Evolution of the pass rate over time

\* insert result map over time \*

It is quite hard to target repeating features as the map changes a lot throughout the years. If, of course, the neighbourhoods that we previously identified tend to have a higher/lower pass rate per year. But the majority of the other areas have good and bad years inspection-wise. For example, `Riverdale` goes from a poor rate in 2014 to a great one in 2015 before falling in 2016 to an even worse rate than in 2014.

When comparing the years between them, we can notice that at first the food inspections were quite severe. This is revealed by the proportion of yellow/red neighbourhoods from 2010 to 2012. The map becomes much greener for the three subsequent years before getting slightly more red again after 2015. Maybe there was a bit of change in the pass standards that made more establishments fail there food inspections. As for 2018, we could be biased by the fact that we only have data for the first half of the year.



As a general conclusion for this analysis, we can affirm that facilities which fail their inspections appear to be concentrated in poor neighbourhoods, mainly inhabited by African-American people. We can make a link here with a larger problem in Chicago: the [legacy of segregation](https://www.theatlantic.com/business/archive/2018/03/chicago-segregation-poverty/556649/?fbclid=IwAR2BkpgrKDsfh1mc-oAMug5Hd6fOuPBIjLxtH0wEj4xxZhalmpM0ZAYBcRk). Indeed, the majority of the money generated by the city of Chicago is invested in the wealthiest neighbourhoods, especially in the `Loop`, i.e. the Central Business District. It would be a good idea for the city hall to focus on those left-aside community areas and improve the quality of the food establishments there.

-> no access to education for poor populations and less and less job opportunities without a diploma

# What have we learned?

While analyzing the inspections' results, we discovered that **severe inequalities**, linked to the population's wealth, ethnicity and education, exist even in the context of food safety; the safest restaurants are, indeed, gathered mostly in prosperous neighbourhoods. As such, one possible way of reducing social inequalities in Chicago would surely be improving the quality of food establishments.

NOT DONE YET, WAITING FOR THE DATA STORY TO BE COMPLETE
