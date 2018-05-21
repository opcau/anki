define({"oj-message":{fatal:"Kritická",error:"Chyba",warning:"Varování",info:"Informace",confirmation:"Potvrzení","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Hodnota nemá očekávaný formát.",detail:"Zadejte hodnotu v očekávaném formátu","plural-separator":", ",hint:{summary:"Příklad: {exampleValue}",detail:"Zadejte hodnotu ve stejném formátu jako v tomto příkladu: '{exampleValue}'","detail-plural":"Zadejte hodnotu ve stejném formátu jako v těchto příkladech: '{exampleValue}'"},optionHint:{detail:"Přijatá hodnota pro volbu '{propertyName}' je '{propertyValueValid}'.",
"detail-plural":"Přijaté hodnoty pro volbu '{propertyName}' jsou '{propertyValueValid}'."},optionTypesMismatch:{summary:"Hodnota pro volbu '{requiredPropertyName}' je vyžadována, pokud je volba '{propertyName}' nastavena na hodnotu '{propertyValue}'."},optionTypeInvalid:{summary:"Nebyla poskytnuta hodnota očekávaného typu pro volbu '{propertyName}'."},optionOutOfRange:{summary:"Hodnota {propertyValue} je mimo přípustný rozsah pro volbu '{propertyName}'."},optionValueInvalid:{summary:"Byla zadána neplatná hodnota '{propertyValue}' pro volbu '{propertyName}'."},
number:{decimalFormatMismatch:{summary:"Hodnota '{value}' nemá očekávaný číselný formát."},decimalFormatUnsupportedParse:{summary:"decimalFormat: 'krátký' a 'dlouhý' nejsou podporovány pro převedenou analýzu.",detail:"Změňte komponentu na readOnly. Pole readOnly nevyvolávají funkci analýzy převodu."},currencyFormatMismatch:{summary:"Hodnota '{value}' nemá očekávaný formát měny."},percentFormatMismatch:{summary:"Hodnota '{value}' nemá očekávaný formát procenta."}},datetime:{datetimeOutOfRange:{summary:"Hodnota '{value}' je mimo přípustný rozsah pro volbu '{propertyName}'.",
detail:"Zadejte hodnotu mezi '{minValue}' a '{maxValue}'."},dateFormatMismatch:{summary:"Hodnota '{value}' nemá očekávaný formát kalendářního data."},timeFormatMismatch:{summary:"Hodnota '{value}' nemá očekávaný formát času."},datetimeFormatMismatch:{summary:"Hodnota '{value}' nemá očekávaný formát data a času."},dateToWeekdayMismatch:{summary:"Den '{date}' není '{weekday}'.",detail:"Zadejte den v týdnu, který odpovídá tomuto datu."}}},"oj-validator":{length:{hint:{min:"Zadejte {min} nebo více znaků.",
max:"Zadejte {max} nebo méně znaků.",inRange:"Zadejte {min} nebo více znaků, maximálně {max}.",exact:"Zadejte {length} znaků."},messageDetail:{tooShort:"Zadejte {min} nebo více znaků, nikoli méně.",tooLong:"Zadejte {max} nebo méně znaků, nikoli více."},messageSummary:{tooShort:"Je zadáno příliš málo znaků.",tooLong:"Je zadáno příliš mnoho znaků."}},range:{number:{hint:{min:"Zadejte číslo větší nebo rovné {min}.",max:"Zadejte číslo menší nebo rovné {max}.",inRange:"Zadejte číslo mezi {min} a {max}."},
messageDetail:{rangeUnderflow:"Číslo musí být větší nebo rovno {min}.",rangeOverflow:"Číslo musí být menší nebo rovno hodnotě {max}."},messageSummary:{rangeUnderflow:"Číslo je příliš nízké.",rangeOverflow:"Číslo je příliš vysoké."}},datetime:{hint:{min:"Zadejte datum a čas shodné s {min} nebo pozdější.",max:"Zadejte datum a čas shodné s {max} nebo dřívější.",inRange:"Zadejte datum a čas mezi {min} a {max}."},messageDetail:{rangeUnderflow:"Datum a čas musí být shodné s {min} nebo pozdější.",rangeOverflow:"Datum a čas musí být shodné s {max} nebo dřívější."},
messageSummary:{rangeUnderflow:"Datum a čas jsou dřívější než minimální datum.",rangeOverflow:"Datum a čas jsou pozdější než maximální datum."}}},restriction:{date:{messageSummary:"Datum {value} je datem deaktivované položky.",messageDetail:"Datum {value} by nemělo být datem deaktivované položky."}},regExp:{summary:"Formát není správný.",detail:"Hodnota '{value}' musí odpovídat tomuto vzoru: '{pattern}'"},required:{summary:"Je požadována hodnota.",detail:"Je nutné zadat hodnotu."}},"oj-editableValue":{required:{hint:"",
messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"Předchozí",nextText:"Další",currentText:"Dnes",weekHeader:"Týd",tooltipCalendar:"Vybrat datum",tooltipCalendarDisabled:"Výběr data deaktivován",weekText:"Týden",datePicker:"Nástroj pro výběr data",inputHelp:"Stisknutím klávesy se šipkou dolů nebo klávesy se šipkou nahoru přejdete ke kalendáři",inputHelpBoth:"Stisknutím klávesy se šipkou dolů nebo klávesy se šipkou nahoru přejdete ke kalendáři, stisknutím kláves Shift a šipky dolů nebo Shift a šipky nahoru přejdete k rozevíracímu seznamu času",
dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{tooltipTime:"Vybrat čas",tooltipTimeDisabled:"Výběr času deaktivován",inputHelp:"Stisknutím klávesy se šipkou dolů nebo klávesy se šipkou nahoru přejdete k rozevírací nabídce času",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},
messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"Hodnota musí odpovídat tomuto vzoru: '{pattern}'"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"Další stránka",labelAccArrowPreviousPage:"Předchozí stránka",tipArrowNextPage:"Další",tipArrowPreviousPage:"Předchozí"},"oj-ojDataGrid":{accessibleSortAscending:"{id} seřazeno vzestupně",accessibleSortDescending:"{id} seřazeno sestupně",accessibleActionableMode:"Přejít do režimu umožňujícího provádět akce",
accessibleNavigationMode:"Přejít do navigačního režimu",accessibleSummaryExact:"Jedná se o datovou mřížku s {rownum} řádky a {colnum} sloupci",accessibleSummaryEstimate:"Jedná se o datovou mřížku s neznámým počtem řádků a sloupců",accessibleSummaryExpanded:"Aktuálně je rozbaleno {num} řádků",accessibleRowExpanded:"Řádek rozbalen",accessibleRowCollapsed:"Řádek sbalen",accessibleRowSelected:"Vybrán řádek {row}",accessibleColumnSelected:"Vybrán sloupec {column}",accessibleStateSelected:"vybráno",accessibleMultiCellSelected:"Vybráno {num} buněk",
accessibleRowContext:"Řádek {index}",accessibleColumnContext:"Sloupec {index}",accessibleRowHeaderContext:"Záhlaví řádku {index}",accessibleColumnHeaderContext:"Záhlaví sloupce {index}",accessibleLevelContext:"Úroveň {level}",accessibleRangeSelectModeOn:"Režim přidání vybraného rozsahu buněk je zapnutý",accessibleRangeSelectModeOff:"Režim přidání vybraného rozsahu buněk je vypnutý",accessibleFirstRow:"Dosáhli jste prvního řádku",accessibleLastRow:"Dosáhli jste posledního řádku",accessibleFirstColumn:"Dosáhli jste prvního sloupce",
accessibleLastColumn:"Dosáhli jste posledního sloupce",accessibleSelectionAffordanceTop:"Deskriptor horního výběru",accessibleSelectionAffordanceBottom:"Deskriptor dolního výběru",msgFetchingData:"Načítání dat...",msgNoData:"Neexistují položky k zobrazení",labelResize:"Změnit velikost",labelResizeWidth:"Šířka pro změnu velikosti",labelResizeHeight:"Výška pro změnu velikosti",labelSortRow:"Seřadit řádek",labelSortRowAsc:"Seřadit řádek vzestupně",labelSortRowDsc:"Seřadit řádek sestupně",labelSortCol:"Seřadit sloupec",
labelSortColAsc:"Seřadit sloupec vzestupně",labelSortColDsc:"Seřadit sloupec sestupně",labelCut:"Vyjmout",labelPaste:"Vložit",labelEnableNonContiguous:"Povolit nesouvislý výběr",labelDisableNonContiguous:"Deaktivovat nesouvislý výběr",labelResizeDialogSubmit:"OK"},"oj-ojRowExpander":{accessibleLevelDescription:"Úroveň {level}",accessibleRowDescription:"Úroveň {level}, řádek {num} z {total}",accessibleRowExpanded:"Řádek rozbalen",accessibleRowCollapsed:"Řádek sbalen",accessibleStateExpanded:"rozbaleno",
accessibleStateCollapsed:"sbaleno"},"oj-ojListView":{msgFetchingData:"Načítání dat...",msgNoData:"Neexistují položky k zobrazení",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"Dvakrát klepněte a podržte.  Počkejte na zaznění tónu a pak tažením upravte uspořádání.",accessibleReorderBeforeItem:"Před {item}",accessibleReorderAfterItem:"Za {item}",accessibleReorderInsideItem:"Dovn&itř {item}",labelCut:"Vyjmout",labelCopy:"Kopírovat",labelPaste:"Vložit",
labelPasteBefore:"Vložit před",labelPasteAfter:"Vložit za"},"oj-_ojLabel":{tooltipHelp:"Nápověda",tooltipRequired:"Požadováno"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Úbytek",tooltipIncrement:"Přírůstek"},"oj-ojTable":{labelAccSelectionAffordanceTop:"Deskriptor horního výběru",labelAccSelectionAffordanceBottom:"Deskriptor dolního výběru",labelEnableNonContiguousSelection:"Povolit nesouvislý výběr",
labelDisableNonContiguousSelection:"Deaktivovat nesouvislý výběr",labelSelectRow:"Vybrat řádek",labelSelectColumn:"Vybrat sloupec",labelSort:"Seřadit",labelSortAsc:"Seřadit vzestupně",labelSortDsc:"Seřadit sestupně",msgFetchingData:"Načítání dat...",msgNoData:"Žádná data k zobrazení."},"oj-ojTabs":{labelCut:"Vyjmout",labelPasteBefore:"Vložit před",labelPasteAfter:"Vložit za",labelRemove:"Odebrat",labelReorder:"Změnit pořadí",removeCueText:"Lze odebrat"},"oj-ojSelect":{seachField:"Pole Hledat",noMatchesFound:"Nebyly nalezeny žádné shody"},
"oj-ojSwitch":{SwitchON:"Zapnuto",SwitchOFF:"Vypnuto"},"oj-ojCombobox":{noMatchesFound:"Nebyly nalezeny žádné shody"},"oj-ojInputSearch":{noMatchesFound:"Nebyly nalezeny žádné shody"},"oj-ojTree":{stateLoading:"Probíhá načítání...",labelNewNode:"Nový uzel",labelMultiSelection:"Vícenásobný výběr",labelEdit:"Upravit",labelCreate:"Vytvořit",labelCut:"Vyjmout",labelCopy:"Kopírovat",labelPaste:"Vložit",labelRemove:"Odebrat",labelRename:"Přejmenovat",labelNoData:"Žádná data"},"oj-ojPagingControl":{labelAccPaging:"Stránkování",
labelAccNavFirstPage:"První stránka",labelAccNavLastPage:"Poslední stránka",labelAccNavNextPage:"Další stránka",labelAccNavPreviousPage:"Předchozí stránka",labelAccNavPage:"Stránka",labelLoadMore:"Zobrazit více...",labelLoadMoreMaxRows:"Bylo dosaženo maximálního limitu {maxRows} řádků",labelNavInputPage:"Stránka",labelNavInputPageMax:"z {pageMax}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"z",msgItemRangeOfAtLeast:"z nejméně",msgItemRangeOfApprox:"z přibližně",
msgItemRangeItems:"položky",tipNavInputPage:"Přejít na stránku",tipNavPageLink:"Přejít na stránku {pageNum}",tipNavNextPage:"Další",tipNavPreviousPage:"Předchozí",tipNavFirstPage:"První",tipNavLastPage:"Poslední",pageInvalid:{summary:"Zadaná hodnota stránky je neplatná.",detail:"Zadejte hodnotu větší než 0."},maxPageLinksInvalid:{summary:"Hodnota pro volbu maxPageLinks není platná.",detail:"Zadejte hodnotu větší než 4."}},"oj-ojMasonryLayout":{labelCut:"Vyjmout",labelPasteBefore:"Vložit před",labelPasteAfter:"Vložit za"},
"oj-panel":{labelAccButtonExpand:"Rozbalit",labelAccButtonCollapse:"Sbalit",labelAccButtonRemove:"Odebrat"},"oj-ojChart":{labelDefaultGroupName:"Skupina {0}",labelSeries:"Řada",labelGroup:"Skupina",labelDate:"Datum",labelValue:"Hodnota",labelTargetValue:"Cíl",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Procenta",labelLow:"Nízké",labelHigh:"Vysoké",labelOpen:"Otevřít",labelClose:"Zavřít",labelVolume:"Množství",labelMin:"Min.",labelMax:"Max.",labelOther:"Jiné",tooltipPan:"Posunout",tooltipSelect:"Rámeček výběru",
tooltipZoom:"Rámeček lupy",componentName:"Graf"},"oj-dvtBaseGauge":{componentName:"Ukazatel"},"oj-ojDiagram":{componentName:"Schéma"},"oj-ojLegend":{componentName:"Legenda"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Jiné",labelGroup:"Skupina",labelSize:"Velikost",labelAdditionalData:"Další data",componentName:"NBox"},"oj-ojPictoChart":{componentName:"Obrázkový graf"},"oj-ojSparkChart":{componentName:"Graf"},"oj-ojSunburst":{labelColor:"Barva",labelSize:"Velikost",componentName:"Vícevrstvý prstencový"},
"oj-ojTagCloud":{componentName:"Shluk značek"},"oj-ojThematicMap":{componentName:"Tematická mapa"},"oj-ojTimeline":{componentName:"Časová osa",labelSeries:"Řada",tooltipZoomIn:"Přiblížit",tooltipZoomOut:"Oddálit"},"oj-ojTreemap":{labelColor:"Barva",labelSize:"Velikost",tooltipIsolate:"Izolovat",tooltipRestore:"Obnovit",componentName:"Stromová mapa"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"tis.",labelScalingSuffixMillion:"mil.",labelScalingSuffixBillion:"mld.",labelScalingSuffixTrillion:"bil.",
labelScalingSuffixQuadrillion:"bld.",labelInvalidData:"Neplatná data",labelNoData:"Žádná data pro zobrazení",labelClearSelection:"Zrušit výběr",labelDataVisualization:"Vizualizace dat",stateSelected:"Vybráno",stateUnselected:"Výběr zrušen",stateMaximized:"Maximalizováno",stateMinimized:"Minimalizováno",stateExpanded:"Rozbaleno",stateCollapsed:"Sbaleno",stateIsolated:"Izolováno",stateHidden:"Skryto",stateVisible:"Viditelné",stateDrillable:"Lze provést",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} z {1}"},
"oj-ojNavigationList":{defaultRootLabel:"Navigační seznam",hierMenuBtnLabel:"Tlačítko hierarchického menu",selectedLabel:"vybráno",previousIcon:"Předchozí",msgFetchingData:"Načítání dat...",msgNoData:"Neexistují položky k zobrazení"},"oj-ojSlider":{noValue:"ojSlider nemá hodnotu",maxMin:"Maximální nemůže být nižší než minimální",valueRange:"Hodnota musí být v rozmezí minimální až maximální",optionNum:"Volba {option} není číslo",invalidStep:"Neplatný krok; krok musí být > 0"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Vstupujete do rozevírací nabídky. Stisknutím F6 můžete přecházet mezi rozevírací nabídkou a přiřazeným ovládacím prvkem.",
ariaLiveRegionInitialFocusNone:"Rozevírací nabídka je otevřena. Stisknutím F6 můžete přecházet mezi rozevírací nabídkou a přiřazeným ovládacím prvkem.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Vstup do rozevírací nabídky. Rozevírací nabídku lze uzavřít přechodem na poslední odkaz v rozevírací nabídce.",ariaLiveRegionInitialFocusNoneTouch:"Otevřená rozevírací nabídka.  Přechodem k dalšímu odkazu jej aktivujte v rámci rozevírací nabídky.",ariaFocusSkipLink:"Poklepáním přejděte k otevřené rozevírací nabídce.",
ariaCloseSkipLink:"Poklepáním zavřete otevřenou rozevírací nabídku."},"oj-pullToRefresh":{ariaRefreshLink:"Aktivací odkazu aktualizujte obsah",ariaRefreshingLink:"Probíhá aktualizace obsahu",ariaRefreshCompleteLink:"Aktualizace byla dokončena"},"oj-ojIndexer":{indexerOthers:"#",ariaDisabledLabel:"Záhlaví žádné odpovídající skupiny",ariaOthersLabel:"číslo",ariaInBetweenText:"Mezi {first} a {second}",ariaKeyboardInstructionText:"Stisknutím klávesy Enter vyberte hodnotu.",ariaTouchInstructionText:"Dvojitým klepnutím a přidržením přejděte do režimu gest, poté tažením nahoru nebo dolů upravte hodnotu."}});