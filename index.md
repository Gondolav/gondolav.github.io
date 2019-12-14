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

## Risk analysis per neighbourhood

\* insert risk map \*

Considering that the best neighbourhoods risk-wise are the ones with the lowest normalized `RISK 1 (HIGH)` rate, the top 5 is:
1. **West Garfield Park**
2. **West Englewood**
3. **East Garfield Park**
4. **Englewood**
5. **Bridgeport**

Still considering the normalized `RISK 1 (HIGH)` rate, the last 5 are:
1. **Lincoln Park**
2. **East Side**
3. **Norwood Park**
4. **Armour Square**
5. **Edison Park**

We use the [Chicago Metropolitan Agency for Planning website](https://www.cmap.illinois.gov/data/community-snapshots) to interpret these results, as they provide community snapshots that summarize demographics, housing, employment, transportation habits, retail sales, property values, and land use in all 77 Chicago community areas, which correspond to the "neighbourhoods" we are considering.

Obviously, `Englewood` and `West Englewood` as well as `East Garfield Park` and `West Garfield Park` are neighbour community areas. In general, these neighbourhoods present similar ethnicity, education level and income level. Moreover, all these 3 indicators have very low values overall: with the exception of `Bridgeport`, in these neighbourhoods $75\%$ of the population earns less than 50'000 \\$ a year and less than $20\%$ of the inhabitants have a university degree. Here, `Bridgeport` looks more like an outlier with its different ethnicity and its median income, and its higher education level being as twice as high as the others.

Consequently, from these results, a good risk rate seems very surprisingly to be linked to the (lack of) wealth and education of a community area.

It is quite hard to find common patterns to these five community areas. Geographically, four of them are located in the suburbs of Chicago, while `Armour Square` is a central neighbourhood. The ethnicity is also heterogeneous, except for the African-American population that appears to be minoritary. As for the education and income levels, they vary widely from one community area to the other, e.g. from a poor median income of 26'500 \\$ per year in `Armour Square` to a very high 99'200 \\$ per year in `Edison Park`.

Hence, a bad risk rate of a Chicago neighbourhood doesn't seem to be related to its location, its ethnicity, its education level or its income level.

## Result analysis per neighbourhood

\* insert result map \*

When regarding the pass rate, we get the following top 5 neighbourhoods:
1. **Clearing**
2. **O'Hare**
3. **Ashburn**
4. **Mount Greenwood**
5. **Loop**

As for the last 5, here is the list:
1. **Oakland**
2. **Woodlawn**
3. **Grand Boulevard**
4. **(Greater) Grand Crossing**
5. **Washington Park**

|community_area|population|ethnicity|education/higher(%)|education/high_school(%)|education/less(%)|income/median($)|income/less_50000(%)|income/more_100000(%)|
|---|---|---|---|---|---|---|---|---|
|CLEARING|25891|hispanic 53% white 43%|26|59|15|62400|40|23|
|O'HARE|12377|white 80%|45|44|11|49300|51|13|
|ASHBURN|43792|black 50% hispanic 40%|30|55|15|66600|35|27|
|MOUNT GREENWOOD|19277|white 85%|43|53|4|94700|23|46|
|LOOP|35880|white 62% asian 17% black 11%|83|15|2|103300|24|52|


These 5 community areas are mainly located in the suburbs of Chicago and have quite diverse populations in terms of ethnicity, education level and income level. Nevertheless, we can notice that at least $25\%$ of their population has a university degree and that they all have a median income of 50'000 dollars per year or more, two high statistics. In particular, `Loop`, the central business district in the downtown area of the city and home to Chicago's commercial core, has a huge university degree rate ($83\%$) and median income (100'000 \$ per year). On the other hand, almost a quarter of this community area's population earns less than 50'000 \$ per year, proof that there are important inequalities even within a single neighbourhood.

Overall, given these results, we could hypothesize that high pass rates are related to prosperous neighbourhoods.

The first two things to notice about this dataframe are that the ethnicity of the five worst community areas in terms of pass rate is predominantly African-American and that these five neighbourhoods are very close to each other geographically. If the percentage of the population with a university degree is not that low, the median income on the other hand is very limited. On average, $70\%$ of the population of these neighbourhoods makes less than 50'000 \$ per year.

The conclusion here is quite the same as the one we draw from the worst neighbourhoods risk-wise: a low pass rate seems to be closely related to the (lack of) wealth and education of a Community Area.

## Evolution of the passing rate

\* insert result map over time \*

As a general conclusion for this analysis, we can affirm that facilities which fail their inspections appear to be concentrated in poor neighbourhoods, mainly inhabited by African-American people. We can make a link here with a larger problem in Chicago: the [legacy of segregation](https://www.theatlantic.com/business/archive/2018/03/chicago-segregation-poverty/556649/?fbclid=IwAR2BkpgrKDsfh1mc-oAMug5Hd6fOuPBIjLxtH0wEj4xxZhalmpM0ZAYBcRk). Indeed, the majority of the money generated by the city of Chicago is invested in the wealthiest neighbourhoods, especially in the `Loop`, i.e. the Central Business District. It would be a good idea for the city hall to focus on those left-aside community areas and improve the quality of the food establishments there.

-> legacy of segregation
-> money invested in wealthiest neighbourhoods
-> no access to education for poor populations and less and less job opportunities without a diploma

# What have we learned?

While analyzing the inspections' results, we discovered that **severe inequalities**, linked to the population's wealth, ethnicity and education, exist even in the context of food safety; the safest restaurants are, indeed, gathered mostly in prosperous neighbourhoods. As such, one possible way of reducing social inequalities in Chicago would surely be improving the quality of food establishments.

NOT DONE YET, WAITING FOR THE DATA STORY TO BE COMPLETE
