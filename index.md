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

# The Setting

**Chicago** is the third most populous and the second most visited city in the United States. It is an international hub for finance, culture, commerce, industry, education, technology, telecommunications and transportation. The Chicago area [has one of the highest gross domestic product (GDP) in the world](https://www.bea.gov/system/files/2018-09/gdp_metro0918_0.pdf) and the [most balanced economy in the U.S.](http://www.worldbusinesschicago.com/economy), due to its high level of diversification. Moreover, the *Windy City* ranks first globally in the [2018 Time Out City Life Index](https://www.timeout.com/chicago/news/chicago-named-the-worlds-best-city-for-having-it-all-012918), a quality of life survey, and seventh for the highest number of [ultra-high-net-worth residents](https://www.chicagobusiness.com/finance-banking/these-are-cities-most-ultra-rich-people): roughly 3,300 residents are worth more than $30 million. Nevertheless, Chicago is also a city of contradictions and inequalities: according to the 2008-2012 U.S. Census Bureau's American Community Survey, about 18.3% of families and 22.1% of the population lived below the poverty line.

# Inspections and Food Establishments

Chicago is home to 16,000 food establishments like restaurants, grocery stores, bakeries, wholesalers, lunchrooms, mobile food vendors and more. The city has many upscale dining establishments as well as many ethnic restaurant districts, including the Mexican American neighbourhoods, such as Pilsen along 18th street, and La Villita along 26th Street; the Puerto Rican enclave of Paseo Boricua in the Humboldt Park neighbourhood; Greektown, along South Halsted Street, immediately west of downtown; Little Italy, along Taylor Street; Chinatown in Armour Square; Polish Patches in West Town; Little Seoul in Albany Park around Lawrence Avenue; Little Vietnam near Broadway in Uptown; and the Desi area, along Devon Avenue in West Ridge.

To ensure the compliance with the [Chicago Food Code](https://www.chicago.gov/content/dam/city/depts/cdph/food_env/general/Food_Protection/FoodCodeRules_Effective_Feb12019.pdf), the **Chicago Department of Public Health (CDPH)** conducts routine, unannounced food inspections, also called *canvass inspections*. The goals of these inspections are:
- to ensure the immediate safety of restaurant customers and employees;
- to prevent foodborne illness outbreaks.
- to help the public learn which restaurants adhere to public health regulations.

CDPH inspects most food establishments twice a year, with other establishments deemed as lower risk inspected once a year or once every other year. In addition to routine canvass inspections, CDPH also conducts license inspections for newly-opened businesses, complaint inspections in response to submitted concerns or suspected food poisoning, and re-inspections for issues arising from canvass inspections that require correction.

The inspections' results are available [online](http://webapps1.chicago.gov/healthinspection/inspection.jsp).

# The Analysis

We analyzed food inspections' results to give an overview of the city's food safety over the last decade. The aim was to identify patterns at the social and geographical levels, focusing our efforts in pinpointing **where to eat safely in Chicago**. With our work, we hope to raise awareness about the Chicago's food safety landscape and instruct people on the quality of the establishments they regularly visit.

In this article, we first take a look at the different facilities' predispositions to inspection failure. Then, we compare famous fast-food restaurant chains, highlighting very interesting findings, and we also present some curious facts about Food Code violations. Next, we address our main objective: showing which neighbourhoods are the safest food-wise and explore the evolution of the neighbourhoods' safety throughout time. Finally, at the end of the article, we assess the usefulness and the potential effects of the inspections.

We use the [Chicago Metropolitan Agency for Planning website](https://www.cmap.illinois.gov/data/community-snapshots) to interpret in a deeper way our results, as they provide community snapshots that summarize demographics, housing, employment, transportation habits, retail sales, property values, and land use in all 77 Chicago community areas, which correspond to the "neighbourhoods" we are considering.
We have built small tables with the different features we found interesting on the best and worse Community Areas according to the two main aspects we considered, namely the `RISK 1 (HIGH)` rate and the `PASS` rate.

## Risk Analysis Per Neighbourhood

One of the features we could use to perform an analysis of these food inspections is the `Risk` associated with each inspection. The risk is a measure that can take 3 different values: `RISK 1 (HIGH)`, `RISK 2 (MEDIUM)` and `RISK 3 (LOW)`. We chose to judge the neighbourhoods by their percentage of high risk food facilities as it appeared to be an accurate measure we could get from this feature. Indeed, such a test would probably tell us something about the safest places in Chicago food-wise.
We built the following map, which colours each community area with a colour according to its `RISK 1 (HIGH)` rate.

\* insert risk map \*
{% include risk_map.html %}

The areas with the most important `RISK 1 (HIGH)` rate are mostly located in the Central, Far North, Northwest and North sides of Chicago. This is rather surprising since these parts of the city are mostly populated with middle-class and well-off populations. On the other hand, the Southwest and South sides of Chicago tend to have a lower risk rate, i.e. in districts with a much lower median income.

Let us now go deeper in our interpretation thanks to the [Chicago Metropolitan Agency for Planning website](https://www.cmap.illinois.gov/data/community-snapshots), as mentioned above. We first summarize some information about the five community areas with the lowest high risk rate.

Obviously, `Englewood` and `West Englewood` as well as `East Garfield Park` and `West Garfield Park` are neighbour community areas. In general, these neighbourhoods present similar ethnicity, education level and income level. Moreover, all these 3 indicators have very low values overall: with the exception of `Bridgeport`, in these neighbourhoods 75% of the population earns less than 50'000$ a year and less than 20% of the inhabitants have a university degree. Here, `Bridgeport` looks more like an outlier with its different ethnicity and its median income, and its higher education level being as twice as high as the others.

Consequently, from these results, a good risk rate seems very surprisingly to be linked to the (lack of) wealth and education of a community area.
We now focus on five worst neighbourhoods according to their risk rate.

It is quite hard to find common patterns to these five community areas. Geographically, four of them are located in the suburbs of Chicago, while `Armour Square` is a central neighbourhood. The ethnicity is also heterogeneous, except for the African-American population that appears to be minority. As for the education and income levels, they vary widely from one community area to the other, e.g. from a poor median income of 26'500 $ per year in `Armour Square` to a very high 99'200$ per year in `Edison Park`.

Hence, a bad risk rate of a Chicago neighbourhood doesn't seem to be related to its location, its ethnicity, its education level or its income level.

\* need to conclude \*

## Result Analysis Per Neighbourhood

Another very interesting feature present in those inspections is obviously the `Result` of the inspection. We decided to focus on the three main possible results: `PASS`, `PASS W/ CONDITIONS` and `FAIL`. Gathering the two first possibilities into a global pass, this provided us with a pass and a fail rates summing up to 1. We can now portray the community areas by their percentage of successful inspections and get the following map:

\* insert result map \*
{% include result_map.html %}

The central district `Loop` as well as the edge areas of the city share the highest rates when regarding the pass inspections. They are wealthy neighbourhoods, which could explain why a peculiar care seems to be taken in making food facilities safe. We clearly cannot say the same about the South Side of Chicago, which gathers the Community Areas with highest `FAIL` rates.

As for the risk analysis, we deepen our interpretation thanks to the [Chicago Metropolitan Agency for Planning website](https://www.cmap.illinois.gov/data/community-snapshots).

These 5 Community Areas are mainly located in the suburbs of Chicago and have quite diverse populations in terms of ethnicity, education level and income level. Nevertheless, we can notice that at least 25% of their population has a university degree and that they all have a median income of 50'000$ per year or more, two high statistics. In particular, `Loop`, the central business district in the downtown area of the city and home to Chicago's commercial core, has a huge university degree rate (83%) and median income (100'000$ per year). On the other hand, almost a quarter of this community area's population earns less than 50'000$ per year, proof that there are important inequalities even within a single neighbourhood.

Overall, given these results, we could hypothesize that high pass rates are related to prosperous neighbourhoods.

The first two things to notice about this table are that the ethnicity of the five worst community areas in terms of pass rate is predominantly African-American and that these five neighbourhoods are very close to each other geographically. If the percentage of the population with a university degree is not that low, the median income on the other hand is very limited. On average, 70% of the population of these neighbourhoods makes less than 50'000$ per year.

The conclusion to draw here is rather clear: a low pass rate seems to be closely related to the (lack of) wealth and education of a Community Area. In particular, districts with an African-American population appear to be more struck by food safety issues.

\* need to conclude \*

## Evolution of the Pass Rate Over Time


\* insert result map over time \*

It is quite hard to target repeating features as the map changes a lot throughout the years. If, of course, the neighbourhoods that we previously identified tend to have a higher/lower pass rate per year. But the majority of the other areas have good and bad years inspection-wise. For example, `Riverdale` goes from a poor rate in 2014 to a great one in 2015 before falling in 2016 to an even worse rate than in 2014.

When comparing the years between them, we can notice that at first the food inspections were quite severe. This is revealed by the proportion of yellow/red neighbourhoods from 2010 to 2012. The map becomes much greener for the three subsequent years before getting slightly more red again after 2015. Maybe there was a bit of change in the pass standards that made more establishments fail there food inspections. As for 2018, we could be biased by the fact that we only have data for the first half of the year.

As a general conclusion for this analysis, we can affirm that facilities which fail their inspections appear to be concentrated in poor neighbourhoods, mainly inhabited by African-American people. We can make a link here with a larger problem in Chicago: the [legacy of segregation](https://www.theatlantic.com/business/archive/2018/03/chicago-segregation-poverty/556649/?fbclid=IwAR2BkpgrKDsfh1mc-oAMug5Hd6fOuPBIjLxtH0wEj4xxZhalmpM0ZAYBcRk). Indeed, the majority of the money generated by the city of Chicago is invested in the wealthiest neighbourhoods, especially in the `Loop`, i.e. the Central Business District. It would be a good idea for the city hall to focus on those left-aside community areas and improve the quality of the food establishments there.

-> no access to education for poor populations and less and less job opportunities without a diploma

# What Have We Learned?

While analyzing the inspections' results, we discovered that **severe inequalities**, linked to the population's wealth, ethnicity and education, exist even in the context of food safety; the safest restaurants are, indeed, gathered mostly in prosperous neighbourhoods. As such, one possible way of reducing social inequalities in Chicago would surely be improving the quality of food establishments.

NOT DONE YET, WAITING FOR THE DATA STORY TO BE COMPLETE

- summary of each section? (including brief summary of the safest neighbourhoods?)
