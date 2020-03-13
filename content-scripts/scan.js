(function() {
  
  const AFINN = {"abandon":-2,"abandoned":-2,"abandons":-2,"abducted":-2,"abduction":-2,"abductions":-2,"abhor":-3,"abhorred":-3,"abhorrent":-3,"abhors":-3,"abilities":2,"ability":2,"aboard":1,"aborted":-1,"aborts":-1,"absentee":-1,"absentees":-1,"absolve":2,"absolved":2,"absolves":2,"absolving":2,"absorbed":1,"abuse":-3,"abused":-3,"abuses":-3,"abusing":-3,"abusive":-3,"accept":1,"acceptable":1,"acceptance":1,"accepted":1,"accepting":1,"accepts":1,"accessible":1,"accident":-2,"accidental":-2,"accidentally":-2,"accidents":-2,"acclaim":2,"acclaimed":2,"accolade":2,"accomplish":2,"accomplished":2,"accomplishes":2,"accomplishment":2,"accomplishments":2,"accusation":-2,"accusations":-2,"accuse":-2,"accused":-2,"accuses":-2,"accusing":-2,"ache":-2,"achievable":1,"aching":-2,"acquit":2,"acquits":2,"acquitted":2,"acquitting":2,"acrimonious":-3,"active":1,"adequate":1,"admire":3,"admired":3,"admires":3,"admiring":3,"admit":-1,"admits":-1,"admitted":-1,"admonish":-2,"admonished":-2,"adopt":1,"adopts":1,"adorable":3,"adoration":3,"adore":3,"adored":3,"adores":3,"adoring":3,"adoringly":3,"advanced":1,"advantage":2,"advantageous":2,"advantageously":2,"advantages":2,"adventure":2,"adventures":2,"adventurous":2,"adversary":-1,"advisable":1,"affected":-1,"affection":3,"affectionate":3,"affectionateness":3,"afflicted":-1,"affordable":2,"affronted":-1,"aficionados":2,"afraid":-2,"aggravate":-2,"aggravated":-2,"aggravates":-2,"aggravating":-2,"aggression":-2,"aggressions":-2,"aggressive":-2,"aggressiveness":-2,"aghast":-2,"agog":2,"agonise":-3,"agonised":-3,"agonises":-3,"agonising":-3,"agonize":-3,"agonized":-3,"agonizes":-3,"agonizing":-3,"agree":1,"agreeable":2,"agreed":1,"agreement":1,"agrees":1,"alarm":-2,"alarmed":-2,"alarmist":-2,"alarmists":-2,"alas":-1,"alert":-1,"alienation":-2,"alive":1,"allegation":-2,"allegations":-2,"allergic":-2,"allow":1,"ally":2,"alone":-2,"altruistic":2,"amaze":2,"amazed":2,"amazes":2,"amazing":4,"ambitious":2,"ambivalent":-1,"amicable":2,"amuse":3,"amused":3,"amusement":3,"amusements":3,"anger":-3,"angered":-3,"angers":-3,"angry":-3,"anguish":-3,"anguished":-3,"animosity":-2,"annoy":-2,"annoyance":-2,"annoyed":-2,"annoying":-2,"annoys":-2,"antagonistic":-2,"anti":-1,"anticipation":1,"anxiety":-2,"anxious":-2,"apathetic":-3,"apathy":-3,"apeshit":-3,"apocalyptic":-2,"apologise":-1,"apologised":-1,"apologises":-1,"apologising":-1,"apologize":-1,"apologized":-1,"apologizes":-1,"apologizing":-1,"apology":-1,"appalled":-2,"appalling":-2,"appealing":2,"appease":2,"appeased":2,"appeases":2,"appeasing":2,"applaud":2,"applauded":2,"applauding":2,"applauds":2,"applause":2,"appreciate":2,"appreciated":2,"appreciates":2,"appreciating":2,"appreciation":2,"apprehensive":-2,"appropriate":2,"appropriately":2,"approval":2,"approved":2,"approves":2,"ardent":1,"arrest":-2,"arrested":-3,"arrests":-2,"arrogant":-2,"arsehole":-4,"ashame":-2,"ashamed":-2,"ass":-4,"assassination":-3,"assassinations":-3,"assault":-2,"assaults":-2,"asset":2,"assets":2,"assfucking":-4,"asshole":-4,"astonished":2,"astound":3,"astounded":3,"astounding":3,"astoundingly":3,"astounds":3,"atrocious":-3,"atrocity":-3,"attack":-1,"attacked":-1,"attacking":-1,"attacks":-1,"attract":1,"attracted":1,"attracting":2,"attraction":2,"attractions":2,"attractive":2,"attractively":2,"attractiveness":2,"attracts":1,"audacious":3,"aura":1,"authority":1,"avenge":-2,"avenged":-2,"avenger":-2,"avengers":-2,"avenges":-2,"avenging":-2,"avert":-1,"averted":-1,"averts":-1,"avid":2,"avoid":-1,"avoided":-1,"avoids":-1,"await":-1,"awaited":-1,"awaits":-1,"award":3,"awarded":3,"awards":3,"awesome":4,"awful":-3,"awkward":-2,"axe":-1,"axed":-1,"backed":1,"backing":2,"backs":1,"bad":-3,"bad luck":-2,"badass":-3,"badly":-3,"badness":-3,"bailout":-2,"balanced":1,"bamboozle":-2,"bamboozled":-2,"bamboozles":-2,"ban":-2,"banish":-1,"bankrupt":-3,"bankruptcy":-3,"bankster":-3,"banned":-2,"barbarian":-2,"barbaric":-2,"barbarous":-2,"bargain":2,"barrier":-2,"bastard":-5,"bastards":-5,"battle":-1,"battled":-1,"battles":-1,"battling":-2,"beaten":-2,"beatific":3,"beating":-1,"beauties":3,"beautiful":3,"beautifully":3,"beautify":3,"beauty":3,"befit":2,"befitting":2,"belittle":-2,"belittled":-2,"beloved":3,"benefactor":2,"benefactors":2,"benefit":2,"benefits":2,"benefitted":2,"benefitting":2,"benevolent":3,"bereave":-2,"bereaved":-2,"bereaves":-2,"bereaving":-2,"best":3,"best damn":4,"betray":-3,"betrayal":-3,"betrayed":-3,"betraying":-3,"betrays":-3,"better":2,"bias":-1,"biased":-2,"big":1,"bitch":-5,"bitches":-5,"bitter":-2,"bitterest":-2,"bitterly":-2,"bizarre":-2,"blackmail":-3,"blackmailed":-3,"blackmailing":-3,"blackmails":-3,"blah":-2,"blame":-2,"blamed":-2,"blames":-2,"blaming":-2,"bless":2,"blesses":2,"blessing":3,"blessings":3,"blind":-1,"bliss":3,"blissful":3,"blithe":2,"bloated":-1,"block":-1,"blockade":-2,"blockbuster":3,"blocked":-1,"blocking":-1,"blocks":-1,"bloody":-3,"blurry":-2,"boastful":-2,"bold":2,"boldly":2,"bomb":-1,"boost":1,"boosted":1,"boosting":1,"boosts":1,"bore":-2,"bored":-2,"boring":-3,"bother":-2,"bothered":-2,"bothers":-2,"bothersome":-2,"boycott":-2,"boycotted":-2,"boycotting":-2,"boycotts":-2,"brainwashing":-3,"brave":2,"braveness":2,"bravery":2,"bravura":3,"breach":-2,"breached":-2,"breaches":-2,"breaching":-2,"breakthrough":3,"breathtaking":5,"bribe":-3,"bribed":-3,"bribes":-3,"bribing":-3,"bright":1,"brightest":2,"brightness":1,"brilliant":4,"brilliance":3,"brilliances":3,"brisk":2,"broke":-1,"broken":-1,"brooding":-2,"brutal":-3,"brutally":-3,"bullied":-2,"bullshit":-4,"bully":-2,"bullying":-2,"bummer":-2,"buoyant":2,"burden":-2,"burdened":-2,"burdening":-2,"burdens":-2,"burglar":-2,"burglary":-2,"calm":2,"calmed":2,"calming":2,"calms":2,"can't stand":-3,"cancel":-1,"cancelled":-1,"cancelling":-1,"cancels":-1,"cancer":-1,"capabilities":1,"capability":1,"capable":1,"captivated":3,"care":2,"carefree":1,"careful":2,"carefully":2,"carefulness":2,"careless":-2,"cares":2,"caring":2,"cashing in":-2,"casualty":-2,"catastrophe":-3,"catastrophic":-4,"cautious":-1,"celebrate":3,"celebrated":3,"celebrates":3,"celebrating":3,"celebration":3,"celebrations":3,"censor":-2,"censored":-2,"censors":-2,"certain":1,"chagrin":-2,"chagrined":-2,"challenge":-1,"champion":2,"championed":2,"champions":2,"chance":2,"chances":2,"chaos":-2,"chaotic":-2,"charged":-3,"charges":-2,"charisma":2,"charitable":2,"charm":3,"charming":3,"charmingly":3,"charmless":-3,"chastise":-3,"chastised":-3,"chastises":-3,"chastising":-3,"cheat":-3,"cheated":-3,"cheater":-3,"cheaters":-3,"cheating":-3,"cheats":-3,"cheer":2,"cheered":2,"cheerful":2,"cheerfully":2,"cheering":2,"cheerless":-2,"cheers":2,"cheery":3,"cherish":2,"cherished":2,"cherishes":2,"cherishing":2,"chic":2,"chide":-3,"chided":-3,"chides":-3,"chiding":-3,"childish":-2,"chilling":-1,"choke":-2,"choked":-2,"chokes":-2,"choking":-2,"clarifies":2,"clarity":2,"clash":-2,"classy":3,"clean":2,"cleaner":2,"clear":1,"cleared":1,"clearly":1,"clears":1,"clever":2,"clouded":-1,"clueless":-2,"cock":-5,"cocksucker":-5,"cocksuckers":-5,"cocky":-2,"coerced":-2,"coercion":-2,"collapse":-2,"collapsed":-2,"collapses":-2,"collapsing":-2,"collide":-1,"collides":-1,"colliding":-1,"collision":-2,"collisions":-2,"colluding":-3,"combat":-1,"combats":-1,"comedy":1,"comfort":2,"comfortable":2,"comfortably":2,"comforting":2,"comforts":2,"comic":1,"commend":2,"commended":2,"commit":1,"commitment":2,"commits":1,"committed":1,"committing":1,"compassion":2,"compassionate":2,"compelled":1,"competencies":1,"competent":2,"competitive":2,"complacent":-2,"complain":-2,"complained":-2,"complaining":-2,"complains":-2,"complaint":-2,"complaints":-2,"complicating":-2,"compliment":2,"complimented":2,"compliments":2,"comprehensive":2,"concerned":-2,"conciliate":2,"conciliated":2,"conciliates":2,"conciliating":2,"condemn":-2,"condemnation":-2,"condemned":-2,"condemns":-2,"confidence":2,"confident":2,"confidently":2,"conflict":-2,"conflicting":-2,"conflictive":-2,"conflicts":-2,"confuse":-2,"confused":-2,"confusing":-2,"congrats":2,"congratulate":2,"congratulation":2,"congratulations":2,"consent":2,"consents":2,"consolable":2,"conspiracy":-3,"constipation":-2,"constrained":-2,"contagion":-2,"contagions":-2,"contagious":-1,"contaminant":-2,"contaminants":-2,"contaminate":-2,"contaminated":-2,"contaminates":-2,"contaminating":-2,"contamination":-2,"contaminations":-2,"contempt":-2,"contemptible":-2,"contemptuous":-2,"contemptuously":-2,"contend":-1,"contender":-1,"contending":-1,"contentious":-2,"contestable":-2,"controversial":-2,"controversially":-2,"controversies":-2,"controversy":-2,"convicted":-2,"convince":1,"convinced":1,"convinces":1,"convivial":2,"cool":1,"cool stuff":3,"cornered":-2,"corpse":-1,"corrupt":-3,"corrupted":-3,"corrupting":-3,"corruption":-3,"corrupts":-3,"costly":-2,"courage":2,"courageous":2,"courageously":2,"courageousness":2,"courteous":2,"courtesy":2,"cover-up":-3,"coward":-2,"cowardly":-2,"coziness":2,"cramp":-1,"crap":-3,"crappy":-3,"crash":-2,"crazier":-2,"craziest":-2,"crazy":-2,"creative":2,"crestfallen":-2,"cried":-2,"cries":-2,"crime":-3,"crimes":-3,"criminal":-3,"criminals":-3,"criminate":-3,"criminated":-3,"criminates":-3,"crisis":-3,"critic":-2,"criticise":-2,"criticised":-2,"criticises":-2,"criticising":-2,"criticism":-2,"criticize":-2,"criticized":-2,"criticizes":-2,"criticizing":-2,"critics":-2,"critique":-2,"crowding":-1,"crude":-1,"cruel":-3,"cruelty":-3,"crush":-1,"crushed":-2,"crushes":-1,"crushing":-1,"cry":-1,"crying":-2,"cunning":2,"cunt":-5,"curious":1,"curse":-1,"cut":-1,"cutback":-2,"cutbacks":-2,"cute":2,"cuts":-1,"cutting":-1,"cynic":-2,"cynical":-2,"cynicism":-2,"damage":-3,"damaged":-3,"damages":-3,"damaging":-3,"damn":-2,"damn cute":3,"damn good":4,"damned":-4,"damnit":-4,"danger":-2,"dangerous":-2,"dangerously":-2,"daredevil":2,"daring":2,"darkest":-2,"darkness":-1,"dauntless":2,"dazzling":3,"dead":-3,"deadening":-2,"deadlock":-2,"deadly":-3,"deafening":-1,"dear":2,"dearly":3,"death":-2,"deaths":-2,"debonair":2,"debt":-2,"deceit":-3,"deceitful":-3,"deceive":-3,"deceived":-3,"deceives":-3,"deceiving":-3,"deception":-3,"deceptive":-3,"decisive":1,"dedicated":2,"dedication":2,"defeat":-2,"defeated":-2,"defect":-3,"defective":-3,"defects":-3,"defender":2,"defenders":2,"defenseless":-2,"defer":-1,"deferring":-1,"defiant":-1,"deficient":-2,"deficiency":-2,"deficiencies":-2,"deficit":-2,"deformed":-2,"deformities":-2,"deformity":-2,"defraud":-3,"defrauds":-3,"deft":2,"defunct":-2,"degrade":-2,"degraded":-2,"degrades":-2,"dehumanize":-2,"dehumanized":-2,"dehumanizes":-2,"dehumanizing":-2,"deject":-2,"dejected":-2,"dejecting":-2,"dejects":-2,"delay":-1,"delayed":-1,"delectable":3,"delicious":3,"delight":3,"delighted":3,"delightful":3,"delightfully":3,"delighting":3,"delights":3,"demand":-1,"demanded":-1,"demanding":-1,"demands":-1,"demonstration":-1,"demoralize":-2,"demoralized":-2,"demoralizes":-2,"demoralizing":-2,"denial":-2,"denials":-2,"denied":-2,"denier":-2,"deniers":-2,"denies":-2,"denounce":-2,"denounces":-2,"dent":-2,"deny":-2,"denying":-2,"deplore":-3,"deplored":-3,"deplores":-3,"deploring":-3,"deport":-2,"deported":-2,"deporting":-2,"deports":-2,"deportation":-2,"deportations":-2,"depressed":-2,"depressing":-2,"deprivation":-3,"derail":-2,"derailed":-2,"derails":-2,"derelict":-2,"deride":-2,"derided":-2,"derides":-2,"deriding":-2,"derision":-2,"desirable":2,"desire":1,"desired":2,"desirous":2,"despair":-3,"despairing":-3,"despairs":-3,"desperate":-3,"desperately":-3,"despondent":-3,"destroy":-3,"destroyed":-3,"destroying":-3,"destroys":-3,"destruction":-3,"destructive":-3,"detached":-1,"detain":-2,"detained":-2,"detention":-2,"deteriorate":-2,"deteriorated":-2,"deteriorates":-2,"deteriorating":-2,"determined":2,"deterrent":-2,"detract":-1,"detracted":-1,"detracts":-1,"devastate":-2,"devastated":-2,"devastating":-2,"devastation":-2,"devastations":-2,"devoted":3,"devotion":2,"devotional":2,"diamond":1,"dick":-4,"dickhead":-4,"die":-3,"died":-3,"difficult":-1,"diffident":-2,"dignity":2,"dilemma":-1,"dilligence":2,"dipshit":-3,"dire":-3,"direful":-3,"dirt":-2,"dirtier":-2,"dirtiest":-2,"dirty":-2,"disabilities":-2,"disability":-2,"disabling":-1,"disadvantage":-2,"disadvantaged":-2,"disagree":-2,"disagreeable":-2,"disagreement":-2,"disappear":-1,"disappeared":-1,"disappears":-1,"disappoint":-2,"disappointed":-2,"disappointing":-2,"disappointment":-2,"disappointments":-2,"disappoints":-2,"disapproval":-2,"disapprovals":-2,"disapprove":-2,"disapproved":-2,"disapproves":-2,"disapproving":-2,"disaster":-2,"disasters":-2,"disastrous":-3,"disbelieve":-2,"discard":-1,"discarded":-1,"discarding":-1,"discards":-1,"discernment":2,"discomfort":-2,"disconsolate":-2,"disconsolation":-2,"discontented":-2,"discord":-2,"discounted":-1,"discouraged":-2,"discredited":-2,"discriminate":-2,"discriminated":-2,"discriminates":-2,"discriminating":-2,"discriminatory":-2,"disdain":-2,"disease":-1,"diseases":-1,"disgrace":-2,"disgraced":-2,"disguise":-1,"disguised":-1,"disguises":-1,"disguising":-1,"disgust":-3,"disgusted":-3,"disgustful":-3,"disgusting":-3,"disheartened":-2,"dishonest":-2,"disillusioned":-2,"disinclined":-2,"disjointed":-2,"dislike":-2,"disliked":-2,"dislikes":-2,"dismal":-2,"dismayed":-2,"dismissed":-2,"disorder":-2,"disorders":-2,"disorganized":-2,"disoriented":-2,"disparage":-2,"disparaged":-2,"disparages":-2,"disparaging":-2,"displeased":-2,"displeasure":-2,"disproportionate":-2,"dispute":-2,"disputed":-2,"disputes":-2,"disputing":-2,"disqualified":-2,"disquiet":-2,"disregard":-2,"disregarded":-2,"disregarding":-2,"disregards":-2,"disrespect":-2,"disrespected":-2,"disrupt":-2,"disrupted":-2,"disrupting":-2,"disruption":-2,"disruptions":-2,"disruptive":-2,"disrupts":-2,"dissatisfied":-2,"distasteful":-2,"distinguished":2,"distort":-2,"distorted":-2,"distorting":-2,"distorts":-2,"distract":-2,"distracted":-2,"distraction":-2,"distracts":-2,"distress":-2,"distressed":-2,"distresses":-2,"distressing":-2,"distrust":-3,"distrustful":-3,"disturb":-2,"disturbed":-2,"disturbing":-2,"disturbs":-2,"dithering":-2,"diverting":-1,"dizzy":-1,"dodging":-2,"dodgy":-2,"does not work":-3,"dolorous":-2,"donate":2,"donated":2,"donates":2,"donating":2,"donation":2,"dont like":-2,"doom":-2,"doomed":-2,"doubt":-1,"doubted":-1,"doubtful":-1,"doubting":-1,"doubts":-1,"douche":-3,"douchebag":-3,"dour":-2,"downcast":-2,"downer":-2,"downhearted":-2,"downside":-2,"drag":-1,"dragged":-1,"drags":-1,"drained":-2,"dread":-2,"dreaded":-2,"dreadful":-3,"dreading":-2,"dream":1,"dreams":1,"dreary":-2,"droopy":-2,"drop":-1,"dropped":-1,"drown":-2,"drowned":-2,"drowns":-2,"drudgery":-2,"drunk":-2,"dubious":-2,"dud":-2,"dull":-2,"dumb":-3,"dumbass":-3,"dump":-1,"dumped":-2,"dumps":-1,"dupe":-2,"duped":-2,"dupery":-2,"durable":2,"dying":-3,"dysfunction":-2,"eager":2,"earnest":2,"ease":2,"easy":1,"ecstatic":4,"eerie":-2,"eery":-2,"effective":2,"effectively":2,"effectiveness":2,"effortlessly":2,"elated":3,"elation":3,"elegant":2,"elegantly":2,"embarrass":-2,"embarrassed":-2,"embarrasses":-2,"embarrassing":-2,"embarrassment":-2,"embezzlement":-3,"embittered":-2,"embrace":1,"emergency":-2,"empathetic":2,"empower":2,"empowerment":2,"emptiness":-1,"empty":-1,"enchanted":2,"encourage":2,"encouraged":2,"encouragement":2,"encourages":2,"encouraging":2,"endorse":2,"endorsed":2,"endorsement":2,"endorses":2,"enemies":-2,"enemy":-2,"energetic":2,"engage":1,"engages":1,"engrossed":1,"engrossing":3,"enjoy":2,"enjoyable":2,"enjoyed":2,"enjoying":2,"enjoys":2,"enlighten":2,"enlightened":2,"enlightening":2,"enlightens":2,"ennui":-2,"enrage":-2,"enraged":-2,"enrages":-2,"enraging":-2,"enrapture":3,"enslave":-2,"enslaved":-2,"enslaves":-2,"ensure":1,"ensuring":1,"enterprising":1,"entertaining":2,"enthral":3,"enthusiastic":3,"entitled":1,"entrusted":2,"envies":-1,"envious":-2,"environment-friendly":2,"envy":-1,"envying":-1,"erroneous":-2,"error":-2,"errors":-2,"escape":-1,"escapes":-1,"escaping":-1,"esteem":2,"esteemed":2,"ethical":2,"euphoria":3,"euphoric":4,"evacuate":-1,"evacuated":-1,"evacuates":-1,"evacuating":-1,"evacuation":-1,"evergreen":2,"evergreens":2,"evergreening":-3,"eviction":-1,"evil":-3,"exacerbate":-2,"exacerbated":-2,"exacerbates":-2,"exacerbating":-2,"exaggerate":-2,"exaggerated":-2,"exaggerates":-2,"exaggerating":-2,"exasparate":-2,"exasperated":-2,"exasperates":-2,"exasperating":-2,"excellence":3,"excellent":3,"excite":3,"excited":3,"excitement":3,"exciting":3,"exclude":-1,"excluded":-2,"exclusion":-1,"exclusive":2,"excruciatingly":-1,"excuse":-1,"exempt":-1,"exhausted":-2,"exhilarated":3,"exhilarates":3,"exhilarating":3,"exonerate":2,"exonerated":2,"exonerates":2,"exonerating":2,"expand":1,"expands":1,"expel":-2,"expelled":-2,"expelling":-2,"expels":-2,"expertly":2,"exploit":-2,"exploited":-2,"exploiting":-2,"exploits":-2,"exploration":1,"explorations":1,"expose":-1,"exposed":-1,"exposes":-1,"exposing":-1,"exquisite":3,"extend":1,"extends":1,"extremist":-2,"extremists":-2,"exuberant":4,"exultant":3,"exultantly":3,"fabulous":4,"fabulously":4,"fad":-2,"fag":-3,"faggot":-3,"faggots":-3,"fail":-2,"failed":-2,"failing":-2,"fails":-2,"failure":-2,"failures":-2,"fainthearted":-2,"fair":2,"fairness":2,"faith":1,"faithful":3,"fake":-3,"faker":-3,"fakes":-3,"faking":-3,"fallen":-2,"falling":-1,"false":-1,"falsely":-2,"falsified":-3,"falsify":-3,"fame":1,"famine":-2,"famous":2,"fan":3,"fantastic":4,"farce":-1,"fascinate":3,"fascinated":3,"fascinates":3,"fascinating":3,"fascination":3,"fascist":-2,"fascists":-2,"fatal":-3,"fatalities":-3,"fatality":-3,"fatigue":-2,"fatigued":-2,"fatigues":-2,"fatiguing":-2,"favor":2,"favorable":2,"favorably":2,"favored":2,"favorite":2,"favorited":2,"favorites":2,"favors":2,"favour":2,"favourable":2,"favourably":2,"favoured":2,"favourite":2,"favourited":2,"favourites":2,"favours":2,"fear":-2,"fearful":-2,"fearfully":-2,"fearing":-2,"fearless":2,"fearlessness":2,"fearsome":-2,"fed up":-3,"feeble":-2,"feeling":1,"felonies":-3,"felony":-3,"fertile":2,"fervent":2,"fervid":2,"festive":2,"fever":-2,"fiasco":-3,"fidgety":-2,"fight":-1,"fighting":-2,"fine":2,"fines":-2,"finest":3,"fire":-2,"fired":-2,"firing":-2,"fit":1,"fitness":1,"filth":-2,"filthy":-2,"flagship":2,"flaw":-2,"flawed":-3,"flawless":2,"flawlessly":2,"flaws":-2,"flees":-1,"flop":-2,"flops":-2,"flu":-2,"flustered":-2,"focused":2,"fond":2,"fondness":2,"fool":-2,"foolish":-2,"fools":-2,"forbid":-1,"forbidden":-2,"forbidding":-2,"forced":-1,"foreclosure":-2,"foreclosures":-2,"forefront":1,"forget":-1,"forgetful":-2,"forgettable":-1,"forgive":1,"forgiving":1,"forgot":-1,"forgotten":-1,"fortune":2,"fortunate":2,"fortunately":2,"foul":-3,"frantic":-1,"fraud":-4,"frauds":-4,"fraudster":-4,"fraudsters":-4,"fraudulence":-4,"fraudulent":-4,"freak":-2,"free":1,"freedom":2,"freedoms":2,"frenzy":-3,"fresh":1,"friend":1,"friendliness":2,"friendly":2,"friendship":2,"fright":-2,"frightened":-2,"frightening":-3,"frikin":-2,"frisky":2,"frowning":-1,"fruitless":-2,"frustrate":-2,"frustrated":-2,"frustrates":-2,"frustrating":-2,"frustration":-2,"ftw":3,"fuck":-4,"fucked":-4,"fucker":-4,"fuckers":-4,"fuckface":-4,"fuckhead":-4,"fuckin":-4,"fucking":-4,"fucking amazing":4,"fucking beautiful":4,"fucking cute":4,"fucking fantastic":4,"fucking good":4,"fucking great":4,"fucking hot":2,"fucking love":4,"fucking loves":4,"fucking perfect":4,"fucktard":-4,"fud":-3,"fuked":-4,"fuking":-4,"fulfill":2,"fulfilled":2,"fulfillment":2,"fulfills":2,"fuming":-2,"fun":4,"funeral":-1,"funerals":-1,"funky":2,"funnier":4,"funny":4,"furious":-3,"futile":-2,"gag":-2,"gagged":-2,"gain":2,"gained":2,"gaining":2,"gains":2,"gallant":3,"gallantly":3,"gallantry":3,"game-changing":3,"garbage":-1,"gem":3,"generous":2,"generously":2,"genial":3,"ghastly":-2,"ghost":-1,"giddy":-2,"gift":2,"glad":3,"glamorous":3,"glamourous":3,"glee":3,"gleeful":3,"gloom":-1,"gloomy":-2,"glorious":2,"glory":2,"glum":-2,"god":1,"goddamn":-3,"godsend":4,"gold":2,"good":3,"goodlooking":3,"goodmorning":1,"goodness":3,"goodwill":3,"goofiness":-2,"goofy":-2,"grace":1,"graceful":2,"gracious":3,"grand":3,"grant":1,"granted":1,"granting":1,"grants":1,"grateful":3,"gratification":2,"grave":-2,"gray":-1,"grisly":-2,"gr8":3,"great":3,"greater":3,"greatest":3,"greed":-3,"greedy":-2,"green wash":-3,"green washing":-3,"greenwash":-3,"greenwasher":-3,"greenwashers":-3,"greenwashing":-3,"greet":1,"greeted":1,"greeting":1,"greetings":2,"greets":1,"grey":-1,"grief":-2,"grieved":-2,"grim":-2,"gripping":2,"groan":-2,"groaned":-2,"groaning":-2,"groans":-2,"gross":-2,"growing":1,"growth":2,"growths":2,"gruesome":-3,"guarantee":1,"guilt":-3,"guilty":-3,"gullibility":-2,"gullible":-2,"gun":-1,"ha":2,"hacked":-1,"haha":3,"hahaha":3,"hahahah":3,"hail":2,"hailed":2,"hallelujah":3,"handpicked":1,"handsome":3,"hapless":-2,"haplessness":-2,"happiest":3,"happiness":3,"happy":3,"harass":-3,"harassed":-3,"harasses":-3,"harassing":-3,"harassment":-3,"hard":-1,"hardier":2,"hardship":-2,"hardy":2,"harm":-2,"harmed":-2,"harmful":-2,"harming":-2,"harmony":2,"harmonious":2,"harmoniously":2,"harms":-2,"harried":-2,"harsh":-2,"harsher":-2,"harshest":-2,"harshly":-2,"hate":-3,"hated":-3,"hater":-3,"haters":-3,"hates":-3,"hating":-3,"hatred":-3,"haunt":-1,"haunted":-2,"haunting":1,"haunts":-1,"havoc":-2,"hazardous":-3,"headache":-2,"healthy":2,"heartbreaking":-3,"heartbroken":-3,"heartfelt":3,"heartless":-2,"heartwarming":3,"heaven":2,"heavenly":4,"heavyhearted":-2,"hehe":2,"hell":-4,"hellish":-2,"help":2,"helpful":2,"helping":2,"helpless":-2,"helps":2,"hero":2,"heroes":2,"heroic":3,"hesitant":-2,"hesitate":-2,"hid":-1,"hide":-1,"hideous":-3,"hides":-1,"hiding":-1,"highlight":2,"hilarious":2,"hinder":-2,"hindrance":-2,"hoax":-2,"hollow":-1,"homeless":-2,"homesick":-2,"homicide":-2,"homicides":-2,"honest":2,"honor":2,"honored":2,"honoring":2,"honour":2,"honoured":2,"honouring":2,"hooligan":-2,"hooliganism":-2,"hooligans":-2,"hope":2,"hopeful":2,"hopefully":2,"hopeless":-2,"hopelessness":-2,"hopes":2,"hoping":2,"horrendous":-3,"horrid":-3,"horrible":-3,"horrific":-3,"horrified":-3,"hospitalized":-2,"hostile":-2,"huckster":-2,"hug":2,"huge":1,"hugs":2,"humane":2,"humble":1,"humbug":-2,"humerous":3,"humiliated":-3,"humiliation":-3,"humor":2,"humorous":2,"humour":2,"humourous":2,"hunger":-2,"hurrah":5,"hurt":-2,"hurting":-2,"hurts":-2,"hypocritical":-2,"hysteria":-3,"hysterical":-3,"hysterics":-3,"icky":-3,"idiocy":-3,"idiot":-3,"idiotic":-3,"ignorance":-2,"ignorant":-2,"ignore":-1,"ignored":-2,"ignores":-1,"ill":-2,"ill-fated":-2,"illegal":-3,"illegally":-3,"illegitimate":-3,"illiteracy":-2,"illness":-2,"illnesses":-2,"illogical":-2,"imaginative":2,"imbecile":-3,"immobilized":-1,"immortal":2,"immune":1,"impair":-2,"impaired":-2,"impairing":-2,"impairment":-2,"impairs":-2,"impatient":-2,"impeachment":-3,"impeachments":-3,"impede":-2,"impeded":-2,"impedes":-2,"impeding":-2,"impedingly":-2,"imperfect":-2,"importance":2,"important":2,"impose":-1,"imposed":-1,"imposes":-1,"imposing":-1,"imposter":-2,"impotent":-2,"impress":3,"impressed":3,"impresses":3,"impressive":3,"imprisoned":-2,"imprisonment":-2,"improper":-2,"improperly":-2,"improve":2,"improved":2,"improvement":2,"improves":2,"improving":2,"inability":-2,"inaction":-2,"inadequate":-2,"inadvertently":-2,"inappropriate":-2,"incapable":-2,"incapacitated":-2,"incapacitates":-2,"incapacitating":-2,"incense":-2,"incensed":-2,"incenses":-2,"incensing":-2,"incoherent":-2,"incompetence":-2,"incompetent":-2,"incomplete":-1,"incomprehensible":-2,"inconsiderate":-2,"inconvenience":-2,"inconvenient":-2,"increase":1,"increased":1,"indecisive":-2,"indestructible":2,"indicted":-2,"indifference":-2,"indifferent":-2,"indignant":-2,"indignation":-2,"indoctrinate":-2,"indoctrinated":-2,"indoctrinates":-2,"indoctrinating":-2,"inediable":-2,"inexorable":-3,"inexcusable":-3,"ineffective":-2,"ineffectively":-2,"ineffectual":-2,"inefficiency":-2,"inefficient":-2,"inefficiently":-2,"inept":-2,"ineptitude":-2,"infantile":-2,"infantilized":-2,"infatuated":2,"infatuation":2,"infect":-2,"infected":-2,"infecting":-2,"infection":-2,"infections":-2,"infectious":-2,"infects":-2,"inferior":-2,"infest":-2,"infested":-2,"infesting":-2,"infests":-2,"inflamed":-2,"inflict":-2,"inflicted":-2,"inflicting":-2,"inflicts":-2,"influential":2,"infract":-2,"infracted":-2,"infracting":-2,"infracts":-2,"infringement":-2,"infuriate":-2,"infuriated":-2,"infuriates":-2,"infuriating":-2,"inhibit":-1,"inhuman":-2,"injured":-2,"injuries":-2,"injury":-2,"injustice":-2,"innovate":1,"innovates":1,"innovation":1,"innovative":2,"inoperative":-2,"inquisition":-2,"inquisitive":2,"insane":-2,"insanity":-2,"insecure":-2,"insensitive":-2,"insensitivity":-2,"insignificant":-2,"insipid":-2,"insolvent":-2,"insomnia":-2,"inspiration":2,"inspirational":2,"inspire":2,"inspired":2,"inspires":2,"inspiring":3,"insufficiency":-2,"insufficient":-2,"insufficiently":-2,"insult":-2,"insulted":-2,"insulting":-2,"insults":-2,"intact":2,"integrity":2,"intelligent":2,"intense":1,"interest":1,"interested":2,"interesting":2,"interests":1,"interrogated":-2,"interrupt":-2,"interrupted":-2,"interrupting":-2,"interruption":-2,"interrupts":-2,"intimacy":2,"intimidate":-2,"intimidated":-2,"intimidates":-2,"intimidating":-2,"intimidation":-2,"intransigence":-2,"intransigency":-2,"intricate":2,"intrigues":1,"invasion":-1,"invincible":2,"invite":1,"inviting":1,"invulnerable":2,"irate":-3,"ironic":-1,"irony":-1,"irrational":-1,"irreparable":-2,"irreproducible":-2,"irresistible":2,"irresistibly":2,"irresolute":-2,"irresponsible":-2,"irresponsibly":-2,"irreversible":-1,"irreversibly":-1,"irritate":-3,"irritated":-3,"irritates":-3,"irritating":-3,"isolated":-1,"itchy":-2,"jackass":-4,"jackasses":-4,"jailed":-2,"jaunty":2,"jealous":-2,"jealousy":-2,"jeopardy":-2,"jerk":-3,"jesus":1,"jewel":1,"jewels":1,"jocular":2,"join":1,"joke":2,"jokes":2,"jolly":2,"jovial":2,"joy":3,"joyful":3,"joyfully":3,"joyless":-2,"joyous":3,"jubilant":3,"jumpy":-1,"justice":2,"justifiably":2,"justified":2,"keen":1,"kickback":-3,"kickbacks":-3,"kidnap":-2,"kidnapped":-2,"kidnapping":-2,"kidnappings":-2,"kidnaps":-2,"kill":-3,"killed":-3,"killing":-3,"kills":-3,"kind":2,"kind of":0,"kinder":2,"kindness":2,"kiss":2,"kudos":3,"lack":-2,"lackadaisical":-2,"lag":-1,"lagged":-2,"lagging":-2,"lags":-2,"lame":-2,"landmark":2,"lapse":-1,"lapsed":-1,"laugh":1,"laughed":1,"laughing":1,"laughs":1,"laughting":1,"launched":1,"lawl":3,"lawsuit":-2,"lawsuits":-2,"lazy":-1,"leadership":1,"leading":2,"leak":-1,"leaked":-1,"leave":-1,"legal":1,"legally":1,"lenient":1,"lethal":-2,"lethality":-2,"lethargic":-2,"lethargy":-2,"liar":-3,"liars":-3,"libelous":-2,"lied":-2,"lifeless":-1,"lifesaver":4,"lighthearted":1,"likable":2,"like":2,"likeable":2,"liked":2,"likers":2,"likes":2,"liking":2,"limitation":-1,"limited":-1,"limits":-1,"litigation":-1,"litigious":-2,"lively":2,"livid":-2,"lmao":4,"lmfao":4,"loathe":-3,"loathed":-3,"loathes":-3,"loathing":-3,"loathsome":-3,"lobbied":-2,"lobby":-2,"lobbying":-2,"lobbyist":-2,"lobbyists":-2,"lol":3,"lolol":4,"lololol":4,"lolololol":4,"lonely":-2,"lonesome":-2,"longing":-1,"lool":3,"loom":-1,"loomed":-1,"looming":-1,"looms":-1,"loool":3,"looool":3,"loose":-3,"looses":-3,"loser":-3,"losing":-3,"loss":-3,"losses":-3,"lost":-3,"lousy":-2,"lovable":3,"love":3,"loved":3,"lovelies":3,"lovely":3,"loves":3,"loving":2,"loving-kindness":3,"lowest":-1,"loyal":3,"loyalty":3,"luck":3,"luckily":3,"lucky":3,"lucrative":3,"ludicrous":-3,"lugubrious":-2,"lunatic":-3,"lunatics":-3,"lurk":-1,"lurking":-1,"lurks":-1,"luxury":2,"macabre":-2,"mad":-3,"maddening":-3,"made-up":-1,"madly":-3,"madness":-3,"magnificent":3,"maladaption":-2,"maldevelopment":-2,"maltreatment":-2,"mandatory":-1,"manipulated":-1,"manipulating":-1,"manipulation":-1,"manslaughter":-3,"marvel":3,"marvelous":3,"marvels":3,"masterpiece":4,"masterpieces":4,"matter":1,"matters":1,"mature":2,"meaningful":2,"meaningless":-2,"medal":3,"mediocrity":-3,"meditative":1,"melancholy":-2,"memorable":1,"memoriam":-2,"menace":-2,"menaced":-2,"menaces":-2,"mercy":2,"merry":3,"mesmerizing":3,"mess":-2,"messed":-2,"messing up":-2,"methodical":2,"methodically":2,"mindless":-2,"miracle":4,"mirth":3,"mirthful":3,"mirthfully":3,"misbehave":-2,"misbehaved":-2,"misbehaves":-2,"misbehaving":-2,"misbranding":-3,"miscast":-2,"mischief":-1,"mischiefs":-1,"misclassified":-2,"misclassifies":-2,"misclassify":-2,"misconduct":-2,"misconducted":-2,"misconducting":-2,"misconducts":-2,"miserable":-3,"miserably":-3,"misery":-2,"misfire":-2,"misfortune":-2,"misgiving":-2,"misinformation":-2,"misinformed":-2,"misinterpreted":-2,"mislead":-3,"misleaded":-3,"misleading":-3,"misleads":-3,"misplace":-2,"misplaced":-2,"misplaces":-2,"misplacing":-2,"mispricing":-3,"misread":-1,"misreport":-2,"misreported":-2,"misreporting":-2,"misreports":-2,"misrepresent":-2,"misrepresentation":-2,"misrepresentations":-2,"misrepresented":-2,"misrepresenting":-2,"misrepresents":-2,"miss":-2,"missed":-2,"missing":-2,"mistake":-2,"mistaken":-2,"mistakes":-2,"mistaking":-2,"misunderstand":-2,"misunderstanding":-2,"misunderstands":-2,"misunderstood":-2,"misuse":-2,"misused":-2,"misuses":-2,"misusing":-2,"moan":-2,"moaned":-2,"moaning":-2,"moans":-2,"mock":-2,"mocked":-2,"mocking":-2,"mocks":-2,"modernize":2,"modernized":2,"modernizes":2,"modernizing":2,"mongering":-2,"monopolize":-2,"monopolized":-2,"monopolizes":-2,"monopolizing":-2,"monotone":-1,"moody":-1,"mope":-1,"moping":-1,"moron":-3,"motherfucker":-5,"motherfucking":-5,"motivate":1,"motivated":2,"motivating":2,"motivation":1,"mourn":-2,"mourned":-2,"mournful":-2,"mourning":-2,"mourns":-2,"muddy":-2,"mumpish":-2,"murder":-2,"murderer":-2,"murdering":-3,"murderous":-3,"murders":-2,"murky":-2,"myth":-1,"n00b":-2,"naive":-2,"narcissism":-2,"nasty":-3,"natural":1,"naïve":-2,"needy":-2,"negative":-2,"negativity":-2,"neglect":-2,"neglected":-2,"neglecting":-2,"neglects":-2,"nerves":-1,"nervous":-2,"nervously":-2,"nice":3,"nifty":2,"niggas":-5,"nigger":-5,"no":-1,"no fun":-3,"noble":2,"noblest":2,"noisy":-1,"non-approved":-2,"nonsense":-2,"noob":-2,"nosey":-2,"not good":-2,"not working":-3,"notable":2,"noticeable":2,"notorious":-2,"novel":2,"numb":-1,"nurturing":2,"nuts":-3,"obliterate":-2,"obliterated":-2,"obnoxious":-3,"obscene":-2,"obscenity":-2,"obsessed":2,"obsolete":-2,"obstacle":-2,"obstacles":-2,"obstinate":-2,"obstruct":-2,"obstructed":-2,"obstructing":-2,"obstruction":-2,"obstructs":-2,"odd":-2,"offence":-2,"offences":-2,"offend":-2,"offended":-2,"offender":-2,"offending":-2,"offends":-2,"offense":-2,"offenses":-2,"offensive":-2,"offensively":-2,"offline":-1,"oks":2,"ominous":3,"once-in-a-lifetime":3,"oops":-2,"opportunities":2,"opportunity":2,"oppressed":-2,"oppression":-2,"oppressions":-2,"oppressive":-2,"optimism":2,"optimistic":2,"optionless":-2,"ostracize":-2,"ostracized":-2,"ostracizes":-2,"ouch":-2,"outage":-2,"outages":-2,"outbreak":-2,"outbreaks":-2,"outcry":-2,"outmaneuvered":-2,"outnumbered":-2,"outrage":-3,"outraged":-3,"outrageous":-3,"outreach":2,"outstanding":5,"overjoyed":4,"overload":-1,"overlooked":-1,"overprotective":-2,"overran":-2,"overreact":-2,"overreacted":-2,"overreacting":-2,"overreaction":-2,"overreacts":-2,"oversell":-2,"overselling":-2,"oversells":-2,"oversight":-1,"oversimplification":-2,"oversimplified":-2,"oversimplifies":-2,"oversimplify":-2,"oversold":-2,"overstatement":-2,"overstatements":-2,"overweight":-1,"overwrought":-3,"oxymoron":-1,"pain":-2,"pained":-2,"painful":-2,"panic":-3,"panicked":-3,"panics":-3,"paradise":3,"paradox":-1,"pardon":2,"pardoned":2,"pardoning":2,"pardons":2,"parley":-1,"passion":1,"passionate":2,"passive":-1,"passively":-1,"pathetic":-2,"pay":-1,"peace":2,"peaceful":2,"peacefully":2,"penalize":-2,"penalized":-2,"penalizes":-2,"penalizing":-2,"penalty":-2,"pensive":-1,"perfect":3,"perfected":2,"perfection":3,"perfectly":3,"perfects":2,"peril":-2,"perjury":-3,"perpetrated":-2,"perpetrator":-2,"perpetrators":-2,"perplexed":-2,"persecute":-2,"persecuted":-2,"persecutes":-2,"persecuting":-2,"perturbed":-2,"pervert":-3,"pesky":-2,"pessimism":-2,"pessimistic":-2,"petrified":-2,"philanthropy":2,"phobic":-2,"picturesque":2,"pileup":-1,"pillage":-2,"pique":-2,"piqued":-2,"piss":-4,"pissed":-4,"pissing":-3,"piteous":-2,"pitied":-1,"pity":-2,"plague":-3,"plagued":-3,"plagues":-3,"plaguing":-3,"playful":2,"pleasant":3,"please":1,"pleased":3,"pleasurable":3,"pleasure":3,"plodding":-2,"poignant":2,"pointless":-2,"poised":-2,"poison":-2,"poisoned":-2,"poisons":-2,"polished":2,"polite":2,"politeness":2,"pollutant":-2,"pollute":-2,"polluted":-2,"polluter":-2,"polluters":-2,"pollutes":-2,"pollution":-2,"poor":-2,"poorer":-2,"poorest":-2,"poorly":-2,"popular":3,"popularity":3,"positive":2,"positively":2,"possessive":-2,"post-traumatic":-2,"postpone":-1,"postponed":-1,"postpones":-1,"postponing":-1,"poverty":-1,"powerful":2,"powerless":-2,"praise":3,"praised":3,"praises":3,"praising":3,"pray":1,"praying":1,"prays":1,"prblm":-2,"prblms":-2,"predatory":-2,"prepared":1,"pressure":-1,"pressured":-2,"pretend":-1,"pretending":-1,"pretends":-1,"pretty":1,"prevent":-1,"prevented":-1,"preventing":-1,"prevents":-1,"prick":-5,"prison":-2,"prisoner":-2,"prisoners":-2,"privileged":2,"proactive":2,"problem":-2,"problems":-2,"profit":2,"profitable":2,"profiteer":-2,"profits":2,"progress":2,"prohibit":-1,"prohibits":-1,"prominent":2,"promise":1,"promised":1,"promises":1,"promote":1,"promoted":1,"promotes":1,"promoting":1,"promptly":1,"propaganda":-2,"prosecute":-1,"prosecuted":-2,"prosecutes":-1,"prosecution":-1,"prospect":1,"prospects":1,"prosperity":3,"prosperous":3,"protect":1,"protected":1,"protects":1,"protest":-2,"protesters":-2,"protesting":-2,"protests":-2,"proud":2,"proudly":2,"provoke":-1,"provoked":-1,"provokes":-1,"provoking":-1,"prudence":2,"pseudoscience":-3,"psychopathic":-2,"punish":-2,"punished":-2,"punishes":-2,"punishing":-2,"punitive":-2,"pure":1,"purest":1,"purposeful":2,"pushy":-1,"puzzled":-2,"quaking":-2,"qualities":2,"quality":2,"questionable":-2,"questioned":-1,"questioning":-1,"racism":-3,"racist":-3,"racists":-3,"rage":-2,"rageful":-2,"rainy":-1,"rant":-3,"ranter":-3,"ranters":-3,"rants":-3,"rape":-4,"raped":-4,"rapist":-4,"rapture":2,"raptured":2,"raptures":2,"rapturous":4,"rash":-2,"ratified":2,"reach":1,"reached":1,"reaches":1,"reaching":1,"reassure":1,"reassured":1,"reassures":1,"reassuring":2,"rebel":-2,"rebellion":-2,"rebels":-2,"recession":-2,"reckless":-2,"recognition":2,"recommend":2,"recommended":2,"recommends":2,"redeemed":2,"refine":1,"refined":1,"refines":1,"refreshingly":2,"refuse":-2,"refused":-2,"refuses":-2,"refusing":-2,"regret":-2,"regretful":-2,"regrets":-2,"regretted":-2,"regretting":-2,"reigning":1,"reject":-1,"rejected":-1,"rejecting":-1,"rejection":-2,"rejects":-1,"rejoice":4,"rejoiced":4,"rejoices":4,"rejoicing":4,"relaxed":2,"relentless":-1,"reliability":2,"reliable":2,"reliably":2,"reliant":2,"relieve":1,"relieved":2,"relieves":1,"relieving":2,"relishing":2,"remarkable":2,"remorse":-2,"repellent":-2,"repercussion":-2,"repercussions":-2,"reprimand":-2,"reprimanded":-2,"reprimanding":-2,"reprimands":-2,"repulse":-1,"repulsed":-2,"repulsive":-2,"rescue":2,"rescued":2,"rescues":2,"resentful":-2,"resign":-1,"resigned":-1,"resigning":-1,"resigns":-1,"resolute":2,"resolution":2,"resolve":2,"resolved":2,"resolves":2,"resolving":2,"respect":2,"respected":2,"respects":2,"responsibility":1,"responsible":2,"responsive":2,"restful":2,"restless":-2,"restore":1,"restored":1,"restores":1,"restoring":1,"restrict":-2,"restricted":-2,"restricting":-2,"restriction":-2,"restrictive":-1,"restricts":-2,"retained":-1,"retard":-2,"retarded":-2,"retreat":-1,"revenge":-2,"revengeful":-2,"revered":2,"revive":2,"revives":2,"revolting":-2,"reward":2,"rewarded":2,"rewarding":2,"rewards":2,"rich":2,"richly":2,"ridiculous":-3,"rig":-1,"rigged":-1,"right direction":3,"righteousness":2,"rightful":2,"rightfully":2,"rigorous":3,"rigorously":3,"riot":-2,"riots":-2,"rise":1,"rises":1,"risk":-2,"risks":-2,"risky":-2,"riveting":3,"rob":-2,"robber":-2,"robed":-2,"robing":-2,"robs":-2,"robust":2,"rofl":4,"roflcopter":4,"roflmao":4,"romance":2,"romantical":2,"romantically":2,"rose":1,"rotfl":4,"rotflmfao":4,"rotflol":4,"rotten":-3,"rude":-2,"ruin":-2,"ruined":-2,"ruining":-2,"ruins":-2,"sabotage":-2,"sad":-2,"sadden":-2,"saddened":-2,"sadly":-2,"safe":1,"safely":1,"safer":2,"safety":1,"salient":1,"salute":2,"saluted":2,"salutes":2,"saluting":2,"salvation":2,"sappy":-1,"sarcastic":-2,"satisfied":2,"savange":-2,"savanges":-2,"save":2,"saved":2,"savings":1,"scam":-2,"scams":-2,"scandal":-3,"scandalous":-3,"scandals":-3,"scapegoat":-2,"scapegoats":-2,"scare":-2,"scared":-2,"scar":-2,"scars":-2,"scary":-2,"sceptical":-2,"scold":-2,"scoop":3,"scorn":-2,"scornful":-2,"scream":-2,"screamed":-2,"screaming":-2,"screams":-2,"screwed":-2,"screwed up":-3,"scum":-3,"scumbag":-4,"seamless":2,"seamlessly":2,"secure":2,"secured":2,"secures":2,"sedition":-2,"seditious":-2,"seduced":-1,"self-abuse":-2,"self-confident":2,"self-contradictory":-2,"self-deluded":-2,"selfish":-3,"selfishness":-3,"sentence":-2,"sentenced":-2,"sentences":-2,"sentencing":-2,"serene":2,"settlement":1,"settlements":1,"severe":-2,"severely":-2,"sexist":-2,"sexistic":-2,"sexy":3,"shaky":-2,"shame":-2,"shamed":-2,"shameful":-2,"share":1,"shared":1,"shares":1,"shattered":-2,"shit":-4,"shithead":-4,"shitty":-3,"shock":-2,"shocked":-2,"shocking":-2,"shocks":-2,"shoody":-2,"shoot":-1,"short-sighted":-2,"short-sightedness":-2,"shortage":-2,"shortages":-2,"shrew":-4,"shy":-1,"sick":-2,"sickness":-2,"side-effect":-2,"side-effects":-2,"sigh":-2,"significance":1,"significant":1,"silencing":-1,"silly":-1,"simplicity":1,"sin":-2,"sincere":2,"sincerely":2,"sincerest":2,"sincerity":2,"sinful":-3,"singleminded":-2,"sinister":-2,"sins":-2,"skeptic":-2,"skeptical":-2,"skepticism":-2,"skeptics":-2,"slam":-2,"slash":-2,"slashed":-2,"slashes":-2,"slashing":-2,"slave":-3,"slavery":-3,"slaves":-3,"sleeplessness":-2,"slick":2,"slicker":2,"slickest":2,"slip":-1,"sloppy":-2,"sluggish":-2,"slumping":-1,"slut":-5,"smart":1,"smarter":2,"smartest":2,"smear":-2,"smile":2,"smiled":2,"smiles":2,"smiling":2,"smog":-2,"smuggle":-2,"smuggled":-2,"smuggling":-2,"smuggles":-2,"sneaky":-1,"sneeze":-2,"sneezed":-2,"sneezes":-2,"sneezing":-2,"snub":-2,"snubbed":-2,"snubbing":-2,"snubs":-2,"sobering":1,"solemn":-1,"solid":2,"solidarity":2,"solidified":2,"solidifies":2,"solidify":2,"solidifying":2,"solution":1,"solutions":1,"solve":1,"solved":1,"solves":1,"solving":1,"somber":-2,"some kind":0,"son-of-a-bitch":-5,"soothe":3,"soothed":3,"soothing":3,"sophisticated":2,"sore":-1,"sorrow":-2,"sorrowful":-2,"sorry":-1,"spacious":1,"spam":-2,"spammer":-3,"spammers":-3,"spamming":-2,"spark":1,"sparkle":3,"sparkles":3,"sparkling":3,"spearhead":2,"speculative":-2,"spirit":1,"spirited":2,"spiritless":-2,"spiteful":-2,"splendid":3,"spoiled":-2,"spoilt":-2,"spotless":2,"sprightly":2,"squander":-2,"squandered":-2,"squandering":-2,"squanders":-2,"squelched":-1,"stab":-2,"stabbed":-2,"stable":2,"stabs":-2,"stall":-2,"stalled":-2,"stalling":-2,"stamina":2,"stampede":-2,"stank":-2,"startled":-2,"startling":3,"starve":-2,"starved":-2,"starves":-2,"starving":-2,"steadfast":2,"steal":-2,"stealing":-2,"steals":-2,"stereotype":-2,"stereotyped":-2,"stifled":-1,"stimulate":1,"stimulated":1,"stimulates":1,"stimulating":2,"stingy":-2,"stink":-2,"stinked":-2,"stinker":-2,"stinking":-2,"stinks":-2,"stinky":-2,"stole":-2,"stolen":-2,"stop":-1,"stopped":-1,"stopping":-1,"stops":-1,"stout":2,"straight":1,"strange":-1,"strangely":-1,"strangled":-2,"strength":2,"strengthen":2,"strengthened":2,"strengthening":2,"strengthens":2,"strengths":2,"stress":-1,"stressed":-2,"stressor":-2,"stressors":-2,"stricken":-2,"strike":-1,"strikers":-2,"strikes":-1,"strong":2,"stronger":2,"strongest":2,"struck":-1,"struggle":-2,"struggled":-2,"struggles":-2,"struggling":-2,"stubborn":-2,"stuck":-2,"stunned":-2,"stunning":4,"stupid":-2,"stupidity":-3,"stupidly":-2,"suave":2,"subpoena":-2,"substantial":1,"substantially":1,"subversive":-2,"succeed":3,"succeeded":3,"succeeding":3,"succeeds":3,"success":2,"successful":3,"successfully":3,"suck":-3,"sucks":-3,"sue":-2,"sued":-2,"sueing":-2,"sues":-2,"suffer":-2,"suffered":-2,"sufferer":-2,"sufferers":-2,"suffering":-2,"suffers":-2,"suicidal":-2,"suicide":-2,"suicides":-2,"suing":-2,"suitable":2,"suited":2,"sulking":-2,"sulky":-2,"sullen":-2,"sunshine":2,"super":3,"superb":5,"superior":2,"support":2,"supported":2,"supporter":1,"supporters":1,"supporting":1,"supportive":2,"supports":2,"supreme":4,"survived":2,"surviving":2,"survivor":2,"suspect":-1,"suspected":-1,"suspecting":-1,"suspects":-1,"suspend":-1,"suspended":-1,"suspicious":-2,"sustainability":1,"sustainable":2,"sustainably":2,"swear":-2,"swearing":-2,"swears":-2,"sweet":2,"sweeter":3,"sweetest":3,"swift":2,"swiftly":2,"swindle":-3,"swindles":-3,"swindling":-3,"sympathetic":2,"sympathy":2,"taint":-2,"tainted":-2,"talent":2,"tard":-2,"tarnish":-2,"tarnished":-2,"tarnishes":-2,"tears":-2,"tender":2,"tenderness":2,"tense":-2,"tension":-1,"terrible":-3,"terribly":-3,"terrific":4,"terrifically":4,"terrified":-3,"terror":-3,"terrorist":-2,"terrorists":-2,"terrorize":-3,"terrorized":-3,"terrorizes":-3,"thank":2,"thankful":2,"thanks":2,"thorny":-2,"thoughtful":2,"thoughtless":-2,"threat":-2,"threaten":-2,"threatened":-2,"threatening":-2,"threatens":-2,"threats":-2,"thrilled":5,"thwart":-2,"thwarted":-2,"thwarting":-2,"thwarts":-2,"timid":-2,"timorous":-2,"tired":-2,"tits":-2,"tolerance":2,"tolerant":2,"toothless":-2,"top":2,"tops":2,"torn":-2,"torture":-4,"tortured":-4,"tortures":-4,"torturing":-4,"totalitarian":-2,"totalitarianism":-2,"tout":-2,"touted":-2,"touting":-2,"touts":-2,"toxic":-3,"tragedies":-2,"tragedy":-2,"tragic":-2,"tranquil":2,"transgress":-2,"transgressed":-2,"transgresses":-2,"transgressing":-2,"trap":-1,"trapped":-2,"traps":-1,"trauma":-3,"traumatic":-3,"travesty":-2,"treason":-3,"treasonous":-3,"treasure":2,"treasures":2,"trembling":-2,"tremor":-2,"tremors":-2,"tremulous":-2,"tribulation":-2,"tribute":2,"tricked":-2,"trickery":-2,"triumph":4,"triumphant":4,"troll":-2,"trouble":-2,"troubled":-2,"troubles":-2,"troubling":-2,"true":2,"trust":1,"trusted":2,"trusts":1,"tumor":-2,"twat":-5,"tyran":-3,"tyrannic":-3,"tyrannical":-3,"tyrannically":-3,"tyrans":-3,"ubiquitous":2,"ugh":-2,"ugliness":-3,"ugly":-3,"unable":-2,"unacceptable":-2,"unappeasable":-2,"unappreciated":-2,"unapproved":-2,"unattractive":-2,"unavailable":-1,"unavailing":-2,"unaware":-2,"unbearable":-2,"unbelievable":-1,"unbelieving":-1,"unbiased":2,"uncertain":-1,"unclear":-1,"uncomfortable":-2,"unconcerned":-2,"unconfirmed":-1,"unconvinced":-1,"uncredited":-1,"undecided":-1,"undercooked":-2,"underestimate":-1,"underestimated":-1,"underestimates":-1,"underestimating":-1,"undermine":-2,"undermined":-2,"undermines":-2,"undermining":-2,"underperform":-2,"underperformed":-2,"underperforming":-2,"underperforms":-2,"undeserving":-2,"undesirable":-2,"uneasy":-2,"unemployed":-1,"unemployment":-2,"unequal":-1,"unequaled":2,"unethical":-2,"uneventful":-2,"unfair":-2,"unfavorable":-2,"unfit":-2,"unfitted":-2,"unfocused":-2,"unforgivable":-3,"unforgiving":-2,"unfulfilled":-2,"unfunny":-2,"ungenerous":-2,"ungrateful":-3,"unhappy":-2,"unhappiness":-2,"unhealthy":-2,"unhygienic":-2,"unified":1,"unimaginative":-2,"unimpressed":-2,"uninspired":-2,"unintelligent":-2,"unintentional":-2,"uninvolving":-2,"united":1,"unjust":-2,"unlikely":-1,"unlovable":-2,"unloved":-2,"unmatched":1,"unmotivated":-2,"unoriginal":-2,"unparliamentary":-2,"unpleasant":-2,"unpleasantness":-2,"unprofessional":-2,"unravel":1,"unreleting":-2,"unresearched":-2,"unsafe":-2,"unsatisfied":-2,"unscientific":-2,"unsecured":-2,"unselfish":2,"unsettled":-1,"unsold":-1,"unsophisticated":-2,"unsound":-2,"unstable":-2,"unstoppable":2,"unsuccessful":-2,"unsuccessfully":-2,"unsupported":-2,"unsure":-1,"untarnished":2,"untrue":-2,"unwanted":-2,"unworthy":-2,"uplifting":2,"uproar":-3,"upset":-2,"upsets":-2,"upsetting":-2,"uptight":-2,"urgent":-1,"useful":2,"usefulness":2,"useless":-2,"uselessness":-2,"vague":-2,"validate":1,"validated":1,"validates":1,"validating":1,"vapid":-2,"verdict":-1,"verdicts":-1,"vested":1,"vexation":-2,"vexing":-2,"vibrant":3,"vicious":-2,"victim":-3,"victimization":-3,"victimize":-3,"victimized":-3,"victimizes":-3,"victimizing":-3,"victims":-3,"victor":3,"victors":3,"victory":3,"victories":3,"vigilant":3,"vigor":3,"vile":-3,"vindicate":2,"vindicated":2,"vindicates":2,"vindicating":2,"violate":-2,"violated":-2,"violates":-2,"violating":-2,"violation":-2,"violations":-2,"violence":-3,"violence-related":-3,"violent":-3,"violently":-3,"virtuous":2,"virulent":-2,"vision":1,"visionary":3,"visioning":1,"visions":1,"vitality":3,"vitamin":1,"vitriolic":-3,"vivacious":3,"vividly":2,"vociferous":-1,"vomit":-3,"vomited":-3,"vomiting":-3,"vomits":-3,"vulnerability":-2,"vulnerable":-2,"walkout":-2,"walkouts":-2,"wanker":-3,"want":1,"war":-2,"warfare":-2,"warm":1,"warmhearted":2,"warmness":2,"warmth":2,"warn":-2,"warned":-2,"warning":-3,"warnings":-3,"warns":-2,"waste":-1,"wasted":-2,"wasting":-2,"wavering":-1,"weak":-2,"weakened":-2,"weakness":-2,"weaknesses":-2,"wealth":3,"wealthier":2,"wealthy":2,"weary":-2,"weep":-2,"weeping":-2,"weird":-2,"welcome":2,"welcomed":2,"welcomes":2,"well-being":2,"well-championed":3,"well-developed":2,"well-established":2,"well-focused":2,"well-groomed":2,"well-proportioned":2,"whimsical":1,"whitewash":-3,"whore":-4,"wicked":-2,"widowed":-1,"willingness":2,"win":4,"winner":4,"winning":4,"wins":4,"winwin":3,"wisdom":1,"wish":1,"wishes":1,"wishing":1,"withdrawal":-3,"wits":2,"woebegone":-2,"woeful":-3,"won":3,"wonderful":4,"wonderfully":4,"woo":3,"woohoo":3,"wooo":4,"woow":4,"worn":-1,"worried":-3,"worries":-3,"worry":-3,"worrying":-3,"worse":-3,"worsen":-3,"worsened":-3,"worsening":-3,"worsens":-3,"worshiped":3,"worst":-3,"worth":2,"worthless":-2,"worthy":2,"wow":4,"wowow":4,"wowww":4,"wrathful":-3,"wreck":-2,"wrenching":-2,"wrong":-2,"wrongdoing":-2,"wrongdoings":-2,"wronged":-2,"wrongful":-2,"wrongfully":-2,"wrongly":-2,"wtf":-4,"wtff":-4,"wtfff":-4,"xo":3,"xoxo":3,"xoxoxo":4,"xoxoxoxo":4,"yeah":1,"yearning":1,"yeees":2,"yes":1,"youthful":2,"yucky":-2,"yummy":3,"zealot":-2,"zealots":-2,"zealous":2};


  // function removeEmojis (string) {
  //   var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  //
  //   return string.replace(regex, '');
  // }

  function tokenize(text) {
    return text.toLowerCase().split(" ");
  }

  function deleteUseless(word) {
    return word.replace(/[^\w]/g, "");console.log(bannedUsers);
  }

  function rateWord(word) {
    return (word in AFINN) ? AFINN[word] : 0;
  }

  function sum(x, y) {
    return x + y;
  }

  function analyze(text) {
    return tokenize(text).map(deleteUseless).map(rateWord).reduce(sum);
  }

  var racism = ["nigg", "chink", "redneck", "gypsy", "redskin"];
  var profanity = ["fuck", "ass", "shit", "bastard", "cunt", "dick", "crap", "bitch", "whore", "slut", "hoe", "hell", "retard", "inbred"];
  var homophobia = ["fag", "dyke", "transvestite", "tranny", "sodomite", "homo"];
  var sexism = ["feminazi", "femenazi", "bitch", "slut", "cunt", "whore", "hoe"];
  var violence = ["kill", "death", "blood", "flesh", "gore"];

  //console.log(window.location.href);
  let currentUrl = window.location.href;

  let otherPage = false;



  if(currentUrl.match(/youtube/)) {
    console.log("It's youtube");

    let comments = document.getElementsByClassName("ytd-comment-renderer");
    // let flipper = [];
    let bannedUsers = [];
    let removed = 0;
    let totalComments = 0;
    let userBan = false;

    for (var i = 0; i < comments.length; i++) {
      if(comments[i]["id"]) {
        if(comments[i].id == "content-text") {
          userBan = false;
          totalComments++;
          // flipper.push(comments[i]);
          let shazam = comments[i].textContent.toLowerCase();
          // console.log(comments[i].textContent);
          //console.log(analyze(shazam));
          // comments[i].innerHTML += `<br>AFINN: ${analyze(shazam)}`;
          if(analyze(shazam) <= -3) {
            removed++;
            userBan = true;
            // comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            comments[i].innerHTML = "This comment contains innappropriate content.";
            comments[i].style = "color: #CE0D00; font-weight: bold;";
          }
          else {
            for(var j = 0; j < profanity.length; j++) {
              if(shazam.indexOf(profanity[j]) != -1) {
                comments[i].innerHTML = "This comment contains innappropriate content.";
                comments[i].style = "color: #CE0D00; font-weight: bold;";
                removed++;
                userBan = true;
                // comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
                break;
              }
            }
            for(var j = 0; j < racism.length; j++) {
              if(shazam.indexOf(racism[j]) != -1) {
                removed++;
                userBan = true;
                comments[i].innerHTML = "This comment contains innappropriate content.";
                comments[i].style = "color: #CE0D00; font-weight: bold;";
                // comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
                break;
              }
            }
            for(var j = 0; j < homophobia.length; j++) {
              if(shazam.indexOf(homophobia[j]) != -1) {
                removed++;
                userBan = true;
                comments[i].innerHTML = "This comment contains innappropriate content.";
                comments[i].style = "color: #CE0D00; font-weight: bold;";
                // comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
                break;
              }
            }
            for(var j = 0; j < sexism.length; j++) {
              if(shazam.indexOf(sexism[j]) != -1) {
                removed++;
                userBan = true;
                comments[i].innerHTML = "This comment contains innappropriate content.";
                comments[i].style = "color: #CE0D00; font-weight: bold;";
                // comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
                break;
              }

            }
            for(var j = 0; j < violence.length; j++) {
              if(shazam.indexOf(violence[j]) != -1) {
                removed++;
                userBan = true;
                comments[i].innerHTML = "This comment contains innappropriate content.";
                comments[i].style = "color: #CE0D00; font-weight: bold;";
                // comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
                break;
              }
            }
          }
          if(userBan) {
            bannedUsers.push(comments[i].parentElement.parentElement.parentElement.children[0].children[1].children[0].href);
          }
        }
      }
    }

    console.log(bannedUsers);

    sendToBackground(totalComments, removed, bannedUsers, otherPage);
  }

  else if(currentUrl.match(/twitter/)) {

    console.log("It's twitter");
    let bannedUsers = [];
    let removed = 0;
    let totalComments = 0;
    let userBan = false;
    let embedded = "css-1dbjc4n";

    let comments = document.getElementsByClassName("css-901oao r-jwli3a r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-bnwqim r-qvutc0");
    //console.log(comments);

    for (var i = 0; i < comments.length; i++) {
      userBan = false;
      totalComments++;
      let shazam = comments[i].textContent.toLowerCase();
      //console.log(comments[i].parentElement.children[0].children[0].children[0].children[0].href);
      //console.log(shazam);
      //comments[i].innerHTML += `<br>AFINN: ${analyze(shazam)}`;


      if(analyze(shazam) <= -3) {
        removed++;
        userBan = true;
        if(comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className.indexOf(embedded)) {
          comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
        }
        else {
          comments[i].parentElement.parentElement.parentElement.parentElement.style = "display: none;";
        }
      }
      else {
        for(var j = 0; j < profanity.length; j++) {
          if(shazam.indexOf(profanity[j]) != -1) {
            removed++;
            userBan = true;
            if(comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className.indexOf(embedded)) {
              comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            }
            else {
              comments[i].parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            }
            break;
          }
        }
        for(var j = 0; j < racism.length; j++) {
          if(shazam.indexOf(racism[j]) != -1) {
            removed++;
            userBan = true;
            if(comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className.indexOf(embedded)) {
              comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            }
            else {
              comments[i].parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            }
            break;
          }
        }
        for(var j = 0; j < homophobia.length; j++) {
          if(shazam.indexOf(homophobia[j]) != -1) {
            removed++;
            userBan = true;
            if(comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className.indexOf(embedded)) {
              comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            }
            else {
              comments[i].parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            }
            break;
          }
        }
        for(var j = 0; j < sexism.length; j++) {
          if(shazam.indexOf(sexism[j]) != -1) {
            removed++;
            userBan = true;
            if(comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className.indexOf(embedded)) {
              comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            }
            else {
              comments[i].parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            }
            break;
          }

        }
        for(var j = 0; j < violence.length; j++) {
          if(shazam.indexOf(violence[j]) != -1) {
            removed++;
            userBan = true;
            if(comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className.indexOf(embedded)) {
              comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            }
            else {
              comments[i].parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            }
            break;
          }
        }
      }
      if(userBan) {
        if(comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className.indexOf(embedded)) {
          bannedUsers.push(comments[i].parentElement.children[0].children[0].children[0].children[0].href);
          // console.log(comments[i].parentElement.children[0].children[0].children[0].children[0].href);
          // console.log("Not Embedded!");
        }
        else {
          bannedUsers.push("https://twitter.com/" + comments[i].parentElement.parentElement.children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[0].innerHTML.slice(1));
          // console.log(comments[i].parentElement.parentElement.children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[0].innerHTML);
          // console.log("Embedded!");
        }
      }
    }
    // console.log(bannedUsers);

    sendToBackground(totalComments, removed, bannedUsers, otherPage);
  }






  else if(currentUrl.match(/facebook/)) {

    console.log("It's facebook");
    let bannedUsers = [];
    let removed = 0;
    let totalComments = 0;
    let userBan = false;

    let comments = document.getElementsByClassName("_6cuy");

    for (var i = 0; i < comments.length; i++) {
      userBan = false;
      totalComments++;
      let shazam = comments[i].textContent.toLowerCase();

      // console.log(comments[i].children[0].children[0].children[0].children[1].textContent);
      // console.log(comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);

      if(analyze(shazam) <= -3) {
        removed++;
        userBan = true;
        comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
      }
      else {
        for(var j = 0; j < profanity.length; j++) {
          if(shazam.indexOf(profanity[j]) != -1) {
            removed++;
            userBan = true;
            comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            break;
          }
        }
        for(var j = 0; j < racism.length; j++) {
          if(shazam.indexOf(racism[j]) != -1) {
            removed++;
            userBan = true;
            comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            break;
          }
        }
        for(var j = 0; j < homophobia.length; j++) {
          if(shazam.indexOf(homophobia[j]) != -1) {
            removed++;
            userBan = true;
            comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            break;
          }
        }
        for(var j = 0; j < sexism.length; j++) {
          if(shazam.indexOf(sexism[j]) != -1) {
            removed++;
            userBan = true;
            comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            break;
          }

        }
        for(var j = 0; j < violence.length; j++) {
          if(shazam.indexOf(violence[j]) != -1) {
            removed++;
            userBan = true;
            comments[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "display: none;";
            break;
          }
        }
      }
      if(userBan) {
        bannedUsers.push(comments[i].children[0].children[0].children[0].children[0].href);
      }
    }
    console.log(bannedUsers);

    sendToBackground(totalComments, removed, bannedUsers, otherPage);
  }





  else {
    console.log("Not supported");
    otherPage = true;
    bannedUsers = [];
    let removed = 0;
    let totalComments = 0;
    sendToBackground(totalComments, removed, bannedUsers, otherPage);
  }

  // content.fetch('http://localhost:3000/messages')
  // .then(response => response.json())
  // .then(json => console.log(json))
  // .catch(err => console.log("Error: " + err));




  // async function postData(url = '', data = {}) {
  //   // Default options are marked with *
  //   const response = await content.fetch(url, {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, *cors, same-origin
  //     //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     //redirect: 'follow', // manual, *follow, error
  //     //referrerPolicy: 'no-referrer', // no-referrer, *client
  //     body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });
  //   return await response.json(); // parses JSON response into native JavaScript objects
  // }
  //
  // postData('http://localhost:3000/messages', { "text":"Yo bro. Whatcha doin?" })
  //   .then((data) => {
  //     console.log(data); // JSON data parsed by `response.json()` call
  //   });





  function handleResponse(message) {
    console.log(`background script sent a response: ${message.response}`);
  }

  function handleError(error) {
    console.log(`Error: ${error}`);
  }

  function sendToBackground(totalComments, removed, bannedUsers, otherPage) {
    if (bannedUsers.length > 0) {
      const url = 'https://cyber-ally.herokuapp.com/users';
      const user = {
          "text": bannedUsers
      };
      const options = {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
              'Content-Type': 'application/json'
          }
      }
      content.fetch(url, options)
          .then(res => res.json())
          .then(res => console.log(res))
          .catch(err => console.log("Error: " + err));
    }

    let sending = browser.runtime.sendMessage({
      total: totalComments,
      removed: removed,
      otherPage: otherPage
    });
    sending.then(handleResponse, handleError);
  }

  // for (var i = 0; i < flipper.length; i++) {
  //   console.log(flipper[i].textContent);
  // }
  // console.log(removed);


  // console.log(flipper);
  // let sergie = [];
  //
  // for (var i = 0; i < flipper.length; i++) {
  //   sergie.push(flipper[i].split(' '));
  // }
  //
  // console.log(sergie);


})();
