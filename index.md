---
layout: article
title: "Where to eat safely in Chicago: gaining insight from food establishments inspections"
show_subscribe: false
license: false
comment: false
show_date: false
show_edit_on_github: false
article_header:
  type: overlay
  theme: dark
  background_color: '#203028'
  background_image:
    gradient: 'linear-gradient(135deg, rgba(34, 139, 87 , .4), rgba(139, 34, 139, .4))'
    src: /chicago-skyline2.jpg
---
<!--more-->


A Post with Header Image, See [Page layout](https://tianqi.name/jekyll-TeXt-theme/samples.html#page-layout) for more examples.

# Introduction



# Facility type analysis and their predisposition to failure



# Compare famous fast-food restaurant chains between them



# Violation Analysis



# Evolution of the food quality per Community Area over time

## Risk analysis

If we consider in the rankings also the total number of inspected facilities per neighbourhood, the top 5 changes (not considering Burnside since it has only 2 facilities inspected):
1. **Edison Park**
2. **Armour Square**
3. **Norwood Park**
4. **East Side**
5. **Lincoln Square**

Still considering the total number of inspected facilities per neighbourhood, the last 5 are:
1. **Bridgeport**
2. **Englewood**
3. **East Garfield Park**
4. **West Englewood**
5. **West Garfield Park**

We use the [Chicago Metropolitan Agency for Planning website](https://www.cmap.illinois.gov/data/community-snapshots) to interpret these results, as they provide community snapshots that summarize demographics, housing, employment, transportation habits, retail sales, property values, and land use in all 77 Chicago community areas, which correspond to the "neighbourhoods" we are considering.

It is quite hard to find common patterns to these five community areas. Geographically, four of them are located in the suburbs of Chicago, while `Armour Square` is a central neighbourhood. The ethnicity is also heterogeneous, except for the African-American population that is minoritary. As for the education and income levels, they vary widely from one community area to the other, e.g. from a poor median income of 26'500 \$ per year in `Armour Square` to a very high 99'200 \$ per year in `Edison Park`.

Hence, the risk rate of a Chicago neighbourhood doesn't seem to be related to its location, its ethnicity, its education level or its income level.

Obviously, `Englewood` and `West Englewood` as well as `East Garfield Park` and `West Garfield Park` are neighbour community areas. In general, these neighbourhoods present similar ethnicity, education level and income level. Moreover, all these 3 indicators have very low values overall: with the exception of `Bridgeport`, in these neighbourhoods $75\%$ of the population earns less than 50'000 \$ a year and less than $20\%$ of the inhabitants have a university degree. Here, `Bridgeport` looks more like an outlier with its different ethnicity and its median income, and its higher education level being as twice as high as the others.

Consequently, from these results, a bad risk rate seems to be linked to the (lack of) wealth and education of a community area.

## Result analysis

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

Similarly to the best neighbourhoods studied in the risk analysis, these 5 community areas are mainly located in the suburbs of Chicago and have quite diverse populations in terms of ethnicity, education level and income level. Nevertheless, we can notice that at least $25\%$ of their population has a university degree and that they all have a median income of 50'000 dollars per year or more, two high statistics. In particular, `Loop`, the central business district in the downtown area of the city and home to Chicago's commercial core, has a huge university degree rate ($83\%$) and median income (100'000 \$ per year). On the other hand, almost a quarter of this community area's population earns less than 50'000 \$ per year, proof that there are important inequalities even within a single neighbourhood.

Overall, given these results, we could hypothesize that high pass rates are related to prosperous neighbourhoods.

The first two things to notice about this dataframe are that the ethnicity of the five worst community areas in terms of pass rate is predominantly African-American and that these five neighbourhoods are very close to each other geographically. If the percentage of the population with a university degree is not that low, the median income on the other hand is very limited. On average, $70\%$ of the population of these neighbourhoods makes less than 50'000 \$ per year.

The conclusion here is quite the same as the one we draw from the worst neighbourhoods risk-wise: a low pass rate seems to be closely related to the (lack of) wealth and education of a Community Area.

## Conclusion
As a general conclusion for this research question, we can affirm that risky facilities or facilities which fail their inspections appear to be concentrated in poor neighbourhoods, mainly inhabited by African-American people. It would be a good idea for the city hall to focus on those left-aside community areas and improve the quality of the food establishments there.

# Inspection effects on establishments



# Conclusion
