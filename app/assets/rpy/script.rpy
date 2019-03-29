# 이 파일에 게임 스크립트를 입력합니다.

# image 문을 사용해 이미지를 정의합니다.
# image eileen happy = "eileen_happy.png"


# OTHERS SETTING
define narration = Character()
define sanghyun = Character('상현', color="#11d7ff")
define unknown = Character('???', color="#FFFFFF")
define boss = Character('사장', color="#FFFFFF")
define guest = Character('손님', color="#FFFFFF")

define playername = "상현"

image boss normal = "character_boss_normal.png"


# HARU SETTING
define haru = Character('하루', color="#ff0000")
image haru normal = "character_haru_normal.png"
image haru normal nolight = "character_haru_normal_nolight.png"
image haru discomfort = "character_haru_discomfort.png"
image haru scaryLaugh = "character_haru_scaryLaugh.png"
image haru disgusting = "character_haru_disgusting"

# HANA SETTING
define haruFake = Character('하루', color="#ff3d3d")
image haruFake normal = "character_hana_normal.png"
image haruFake laugh = "character_hana_laugh.png"
image haruFake spaced = "character_hana_spaced.png" # 하루 이미지를 사용하고 있음


# YUJIN SETTING
define yujin = Character('유진', color="#ff8c35")
image yujin normal = "character_yujin_normal.png"
image yujin laugh = "character_yujin_laugh.png"
image yujin discomfort = "character_yujin_discomfort.png"
image yujin painful = "character_yujin_painful.png"


# SUYEON SETTING
define suyeon = Character('수연', color="50BCDF")
image suyeon normal = "character_suyeon_normal.png"



# BACKGROUND SETTING
image bg room1_light = "bg_room1_light.png"
image bg room2_dark = "bg_room2_dark.png"
image bg room3_dark = "bg_room3_dark.png"
image bg deckhall_light = "bg_deckhall_light.png"
image bg restaurant_light = "bg_restaurant_light.png"
image bg restaurant_dark = "bg_restaurant_dark.png"
image bg kitchen_light = "bg_kitchen_light.png"
image bg lobby_light = "bg_lobby_light.png"
image bg hall_light = "bg_kitchen_light.png"
image bg lifeBoat_dark = "bg_lifeBoat_dark.png"
image bg noLifeBoat_dark = "bg_noLifeBoat_dark.png"


# 여기에서부터 게임이 시작합니다.
label start:

#################################
# JUMP STATEMENT FOR DEVELOPMENT#

    jump day1_night_room

#      JUMP STATEMENT END       #
#################################




#### DAY 1 ####
### SCENE PROLOGUE 1
label prologue1:

    scene bg room1_light

    narration "\"6호 태풍 '나리'가 한반도 내륙을 강타하고 있습니다. 이번 태풍은 서해안을 따라 북상하고 있어, 강원도를 제외한 전국이 태풍의 영향권에 들어와 있습니다.\""

    narration "\"교육부에서는 전국에 임시 휴교령을 내렸고, 양양국제공항을 제외한 모든 공항에서의 항공편이 취소되었습니다. 태풍의 영향으로 폭우, 해일, 강풍 피해가 우려되오니 각별한 주의가 필요합니다.\""

    narration "TV에서는 연일 태풍 이야기만 풀어대고 있다."

    narration "이번 항해는 취소될 것이라고 생각하며, [playername]은 침대에 몸을 뉘었다."

    narration "..."

    narration ".."

    narration "몸을 흔드는 부드러운 손길이 느껴져, [playername]은 선잠이 깼다."

    unknown "일어나, 항해 준비하러 가자."

    sanghyun "누나, 오늘 일정 없잖아..."

    unknown "무슨소리야, 일해야지."

    show yujin normal at right

    narration "누나라고 불린 그녀의 이름은 임유진, 3등 항해사로서 근무하고 있으며, 타지에서 온 후배 [playername]의 편의를 봐주고 있다."

    narration "나긋나긋하면서도 똑부러진 성격을 지닌 유진의 맑은 눈동자가 얼른 일어나라고 말하듯 [playername]을 응시하고 있다."

    narration "그러나 찰랑거리는 갈색 머리카락이 은은한 시트러스 향기를 풍기고 있어, [playername]의 정신은 몽롱해져만 갔다."

    yujin "왜, 뭐 묻었어?"

    sanghyun "아니, 별 거 아냐. 그보다 태풍오는데 항해 준비해?"

    yujin "사장님이 항해 한대. 손님은 별로 없지만, 중요한 클라이언트의 출항 요청이 있었다나?"

    sanghyun "쳇, 간만에 쉬나 했더니."

    yujin "월급 받으려면 일해야지?\n얼른 동해만 빠져나가면 항해하는데 별 문제는 없을거야."

    sanghyun "하아..."

    sanghyun "유진아, 30분 뒤에 알람."

    show yujin discomfort at right

    yujin "호오? 저녁 먹기 싫은가보네?\n출항 첫 날이라 맛있는 게 많을 텐데?"

    sanghyun "컵라면 먹지 뭐."

    show yujin laugh at right

    yujin "사장님께 특별히 부탁해둬서 저녁에는 맥주를 걸칠 수 있을 텐데?"

    sanghyun "누님! 믿고있었다고!"

    show yujin normal at right    

    yujin "훗, 쉬운 녀석. 얼른 챙겨서 나와."

    show yujin laugh at right

    yujin "그… 위쪽은 가리고."

    narration "갑자기 일어난 [playername]을 본 임유진의 뺨이 붉게 물들었다."

    narration "바닷일을 하면서 자연스럽게 다져진 구릿빛의 몸이 인상적이었다."

    sanghyun "우리사이에 뭐 어때서?"

    yujin "알았으니까. 먼저 가있을테니 빨리 챙겨!"

    hide yujin

    narration "황급하게 방을 나서는 임유진의 모습을 바라보던 [playername]은, 그녀가 떠나자 무심히 창문 밖을 바라봤다."

    narration "태풍을 부정하듯, 동쪽 바다는 고요하기 그지없었다."

    narration "다소 귀찮지만, 항해 준비하느라 바쁠 오늘 하루만 지나면 한가한 여정이 될 것 같다."

    narration "그렇게 [playername]은 생각했다."

### SCENE PROLOGUE 2
label prologue2:

    scene bg deckhall_light

    narration "[playername]은 항해 준비가 한창인 갑판 위를 걷고 있었다."

    narration "그러던 도중 익숙한 뒷모습이 보여, [playername]은 믿을 수 없다는 듯한 표정을 지은 채 멈춰섰다."

    sanghyun "고… 하루?"

    show haruFake normal at right

    haruFake "[playername]이구나! 오랜만이야."

    sanghyun "네가 여긴 어떻게?"

    haruFake "잠깐 친가에 놀러왔다가, 급히 일손이 필요하다고 해서 아르바이트 삼아 왔어."

    show boss normal at left

    boss "친한 친구의 딸이라서 말이지."

    narration "후덕한 인상을 지닌 아저씨가 둘의 사이에 끼어들었다."

    narration "중후한 외모에는 다소 걸맞지 않는 검은 안경이 도드라져 보인다. 흰색 폴라 티셔츠와 밝은 갈색의 점퍼가, 살짝 나온 뱃살을 자연스럽게 덮고 있다."

    narration "사장님처럼 보이지 않으면서도, 사장님인 걸 알면 '그럴 만 하다'는 말이 나올만한 분위기를 풍기고 있다."

    narration "가볍게 목례를 하는 [playername]에게 손사래를 치며 말을 이어갔다."

    boss "자네도 알다시피 태풍때문에 복귀하지 못한 친구들이 있어서 말야. 이번 항해에 승무원으로서 하루양이 함께 할걸세."

    boss "보아하니 혹시 아는 사이인가?"

    sanghyun "그, 그렇습니다."

    haruFake "중학교때 친구였어요."

    boss "오호, 그럼 잘 됐구만. 아무래도 미숙한 부분이 많을 테니, 자네가 잘 도와 주게나."

    sanghyun "알겠습니다."

    hide boss

    hide haruFake

    narration "멀어져가는 사장님의 뒷모습을 보며, [playername]은 상념에 잠겼다."

    narration "고하루, [playername]의 소꿉친구였다."

    narration "조금 내성적이지만 예쁘고 착한 아이였고, 언제나 [playername]을 잘 따르는 소녀였다."

    narration "함께 지내는 시간이 길어지면서 점점 하루는 [playername]을 이성적으로 좋아하게 되었고, 고등학교에 진학하면서 자신의 마음을 고백했다."

    narration "그러나 [playername]은 거절했다."

    narration "머리로는 하루가 자신에게는 과분하다고 생각했다. 매력적인 외모를 타고 난데다, 항상 [playername]을 배려해주는 점이 좋았다."

    narration "하지만 평소에 친구 사이라기엔 스킨십이 과하고, 사소한 일에 과민반응을 할 때가 잦았다. 그런 것들이 가끔은 스트레스로 다가오곤 했다."

    narration "그래서 망설여졌다. 아직은 그녀를 감당할 수 없을 것 같았다."

    narration "결국 조금 더 시간을 갖자고, 지금은 공부를 해야 할 때라고 에둘러 거절했다."

    narration "그렇게 둘의 사이는 멀어져만 갔고, 고등학교 시절 내내 [playername]의 기억 속의 하루는 기계적으로 공부만 하는 모습만이 남았다."

    narration "그렇기에 '중학교때 친구였다'는 하루의 말에는 가시가 박혀 있는 듯 했고, [playername]은 이를 뼈저리게 느끼고 있었다."

    show haruFake normal at right

    haruFake "그래서, 그동안 잘 지냈어?"

    sanghyun "응, 그래… 보다시피. 너는?"

    haruFake "대학가서 공부하고, 그러고 있지."

    haruFake "방학이라 놀러 왔는데, 보다시피."

    sanghyun "하하하... 그렇구나."

    narration "..."

    narration "무거운 정적이 둘을 휘감아 온다."

    narration "결국 먼저 나선 것은 [playername]이었다."

    sanghyun "지금은 선적 작업을 도와야돼서, 아무튼 이따가 얘기하자."

    haruFake "응!"

    narration "그렇게 떠나가는 [playername]의 뒷모습을, 하루는 지긋이 바라보고 있었다."

    sanghyun "아, 그리고"

    sanghyun "오랜만에 웃는 모습을 보니 좋네."

    show haruFake laugh at right

    haruFake "고마워."

    narration "등 너머로 나지막히 말하는 [playername]에게, 하루는 더욱 환한 웃음을 지어 보였다."

### SCENE DAY1 - NIGHT - KITCHEN
label day1_night_kitchen:

    scene bg kitchen_light

    show haruFake normal at right

    haruFake "안녕하세요. 알바생 고하루입니다. 잘 부탁드려요."

    narration "저녁 식사 준비가 한창인 주방에서, 하루가 주방장과 인사를 나누고 있었다."

    narration "서빙을 준비하러 주방으로 들어온 [playername]이 하루와 마주친다."

    sanghyun "하루? 여긴 왠일이야? 객실 담당이지 않았어?"

    haruFake "안녕! 객실 담당으로 배정받았지만, 사장님이 이번 항해에는 승무원도 손님도 적어서 서빙까지 도와주라고 하셨어."

    sanghyun "나도 그렇지만, 알바생한테 그래도 되는건가?"

    show haruFake laugh at right

    haruFake "그만큼 보너스를 많이 주시기로 했으니까"

    sanghyun "하하, 그렇다면야."

    narration "싱긋이 웃어 보이는 하루를 보는 [playername]의 얼굴이 약간 상기되었다."

    show haruFake normal

    narration "창백하다고 할 정도로 흰 피부와 검은 단발이 대조적이었다. 어릴 적부터 인상적이었던 붉은 눈은 여전했지만, 지금은 고혹적인 느낌을 더하고 있다."

    narration "과하지 않게, 사과같은 싱긋함 사이로 장미꽃 봉오리가 터져나가려는 듯한, 앳되면서도 성숙한."

    narration "수수하면서도 청순한 유진과는 확실히 다른 방향으로 매력을 뿜어내고 있었다."

    show yujin normal at left

    yujin "아저씨, 서빙하셔야죠?"

    sanghyun "누나! 여긴 왠일이에요?"

    show yujin discomfort

    yujin "뭐, 우리 귀여운 하루랑 같은 이유지. 잔업...이라고 할 수 있을까?"

    yujin "끝나고 당직도 서야돼…"

    yujin "항해사도 선장님 포함 셋 밖에 없는데다, 주방장님도 기관장님도 홀로 일하니 불평할 입장은 아니지만."

    haruFake "힘드시겠어요."

    sanghyun "이렇게까지 급히 가야될 이유가 있는건가?"
    
    show yujin painful

    yujin "다 돈때문이지 뭐. 사장님 성격 알잖아?"

    show yujin normal

    yujin "그래도 걱정해주는 우리 귀요미들이 있으니까 힘내야지."

    sanghyun "누가 귀요미야? 그리고 걱정해준 적 없는데?"

    show yujin laugh

    yujin "오구오구, 그랬어요?"

    yujin "마음 깊은 곳에서 걱정해준 거 다 알아."

    show yujin discomfort

    yujin "우리 츤데레 [playername]이는 언제쯤 츤츤을 끝내고 데레데레 해주려나."

    sanghyun "처음 일하는 하루가 걱정되지, 닳고 닳으신 3항사님이 걱정되지는 않네요."

    show yujin laugh

    yujin "오구오구, 그랬어요?"

    sanghyun "아, 정말!"

    show haruFake laugh

    haruFake "후훗."

    sanghyun "너까지 그러기야?"

    narration "말로는 싫어하면서도 마냥 내치지는 못하는 [playername]의 모습을 보고, 하루와 유진은 즐거운 듯 웃음을 지어 보인다."

    show haruFake normal

    haruFake "그럼 요리가 나온것 같으니, 먼저 서빙하러 다녀올게요."

    sanghyun "괜찮겠어? 다음 요리가 나오면 같이 가는게 좋지 않아?"

    haruFake "따뜻할 때 먹어야 맛있잖아. 그럼 식당에서 봐요!"

    show yujin normal

    yujin "그래, 다녀와."

    hide haruFake

    narration "음식을 들고 식당으로 향하는 하루를, [playername]은 걱정스러운 눈초리로 쳐다보고 있었다."

    show yujin discomfort

    yujin "왜, 못미더워?"

    sanghyun "그런건 아니지만."

    show yujin normal

    yujin "똑부러지잖아. 잘 해낼 수 있을 거야. 오히려 너보다 더 잘할지도?"

    sanghyun "누나보다는 잘하겠지. 덕분에 안심이 되네."

    yujin "오구오구, 그랬어요?"

    narration "[playername]과 유진은 다시금 자그락대기 시작했다."

### SCENE DAY1 - NIGHT - HARU ROOM
label day1_night_haruRoom:

    scene bg room3_dark

    narration "어두운 객실, 바닥에는 음식이 놓여 있다."

    narration "고요하던 방 한켠에서, 작게 속삭이는 소리가 들린다."

    haru "[playername]은 내 건데, 나만의 것인데…"

    haru "죽이겠어… 죽여버리겠어…"


### SCENE DAY1 - NIGHT - RESTAURANT
label day1_night_restaurant:


    scene bg restaurant_dark

    narration "[playername]과 하루, 유진은 식당에서 접객을 하고 있다."

    narration "손님이 [playername]에게 말을 걸었다."

    guest "멀미가 있어서 양식은 별로 안끌리는데, 혹시 컵라면같은 간단한 음식으로 가능할까요?"

    sanghyun "네, 가져다 드리겠습니다."

    guest "아, 그리고 담요도 부탁드려요."

    sanghyun "알겠습니다."

    narration "승객의 부탁을 받은 [playername]은 주방으로 돌아가려고 하지만, 그 앞을 하루가 막아섰다."

    show haruFake normal at right

    haruFake "라면이랑 담요. 쉬운 일이니까 내가 갔다 올게."

    sanghyun "아…"


## Selection (day1_night_restaurant_selection)
menu:

    "알았다":
        jump day1_night_restaurant_selection1


    "내 일이니 내가 하겠다":
        jump day1_night_restaurant_selection2


## Selection 1
label day1_night_restaurant_selection1:

    sanghyun "그래, 미안하지만 다녀와 줄래?"

    show haruFake laugh

    haruFake "응!"

    hide haruFake

    narration "하루는 가슴에 쟁반을 안고 주방으로 총총 뛰어간다."

    show yujin normal at right

    yujin "귀엽네."

    sanghyun "그러게."

    yujin "널 좋아하는 거 아냐?"

    sanghyun "에이, 만난지 몇 시간 되지도 않았는데?"

    show yujin laugh

    yujin "소꿉친구라며? 줄곧 마음에 두고 있다가, 이번에 작정하고 온 거 아냐?"

    sanghyun "그럴리가. 이상하게 분위기 잡아가지 마요."

    show yujin discomfort

    yujin "쳇, 그럴 수도 있지. 꼭 딱 잘라서 부정해야겠니?"

    narration "임유진은 뚱한 표정으로 불만을 표시했지만, [playername]는 아랑곳하지 않고 접객을 이어나갔다."

    jump day1_night_room
## END OF day1_night_restaurant_selection1


## Selection 2
label day1_night_restaurant_selection2:

    sanghyun "고맙지만 내가 할 일이야. 접객쪽을 부탁해."

    show haruFake spaced
   
    haruFake "아… 응. 알았어."

    narration "멀어져 가는 [playername]의 뒷모습을 하루는 멍하게 바라보고 있다."

    show yujin discomfort at left

    yujin "에구 허리야... 하나야, 언니좀 도와줘!"

    show haruFake normal

    haruFake "앗!"

    haruFake "이제 시작인데, 허리가 벌써 안좋아요?"

    show yujin laugh

    yujin "[playername]이 워낙 격렬해서…"

    show haruFake spaced

    show yujin normal

    yujin "하하, 거짓말인거 알지?"

    yujin "그런 눈으로 쳐다보면 무서워."

    show haruFake laugh

    haruFake "후훗, 알고 있어요."

    narration "하루는 씁쓸한 웃음을 지어 보이며 서빙을 계속해 나갔다."

    jump day1_night_room
## END OF day1_night_restaurant_selection2



### SCENE DAY1 - NIGHT - ROOM
label day1_night_room:

    scene bg room2_dark

    narration "저녁 서빙이 끝나고, [playername]은 빈 객실을 점검하고 있다."

    narration "도중 인기척을 느껴 뒤를 돌아본 [playername]은, 쭈뼛쭈뼛 서 있는 하루를 발견했다."

    narration "놀란 기색을 보이며 하루가 황급히 인사한다."

    show haru normal at left

    haru "아... 안녕?"

    sanghyun "하루구나. 무슨 일이야?"

    haru "아… 으… 맞아."

    haru "저기… 일을… 도와줄까 해서."

    sanghyun "첫 날이라 힘들텐데, 쉬고 있어도 돼."

    sanghyun "안쓰는 객실이라 대충 둘러봐도 되니까."

    haru "그래도... 옆에서 구경이라도... 하고 싶어."

    sanghyun "그렇다면야. 일단 다음 방으로 가자."

    haru "응!"

    narration "함께 나선 두 사람은 다음 방으로 향한다."

    narration "무심코 방문을 연 [playername]의 눈앞에, 축 늘어진 하얀 머리카락이 펼쳐져 있다."

    sanghyun "으악! 뭐야"

    sanghyun "설마 수연이야?"

    show suyeon normal at right

    suyeon "오빠… 배고파…"

    narration "꼬르륵…"

    narration "수연이라고 불린 소녀의 위장이 비명을 지르고 있었다."

    sanghyun "설마, 이번에도 몰래 탄거야?"

    suyeon "헤헤, 오빠랑 떨어지긴 싫은걸."

    suyeon "아빠한테 들키면 배를 돌리라고 할 거 같아서, 내일까지 숨어있으려구"

    narration "울먹이는 수연을 본 [playername]이 한숨을 쉬며, 체념한 듯 말한다."

    playername "일단 먹을걸 가져와 줄게. 내일은 꼭 사장님한테 얘기해야 한다?"

    show haru normal nolight

    suyeon "오빠, 사랑해!"

    narration "[playername]에게 안긴 수연은, 이를 멍하니 바라보고 있던 하루와 눈이 마주친다."

    suyeon "그런데 옆에 언니는 누구야?"

    show haru normal

    haru "아, 고하루…에요. 아르바이트…"

    haru "그쪽은?"

    suyeon "남수연입니다."

    suyeon "[playername] 오빠의 신부가 될 사람이에요."

    show haru normal nolight

    haru "그...렇구나."

    show haru discomfort

    haru "나는 이만 가볼게."

    sanghyun "벌써 가? 객실 구경하는거 아니었어?"

    haru "..."

    haru "화장실."

    narration "하루는 방에서 뛰쳐나온다. 그리고 문 밖에서 거친 숨을 몰아쉬었다."

    hide suyeon

    show yujin normal at right

    yujin "깜짝이야! 하루잖아? 어디 아프니?"

    narration "건너편 객실에서 나오던 유진이 하루와 마주친다."

    hide haru

    narration "그러나 하루는 답을 하지 않고, 도망치듯 달려나갔다."

    show yujin discomfort

    yujin "뭐지?"

    sanghyun "화장실 가고 싶다던데?"

    narration "딱!"

    narration "유진이 [playername]의 이마를 때렸다."

    sanghyun "아, 왜 때리는거야?"

    yujin "하여간, 섬세한 부분은 찾아볼 수가 없다니까."

    sanghyun "그대로 말한 것 뿐인데? 그보다..."

    narration "[playername]이 뒤를 돌아보자, 유진이 [playername]의 어깨 너머로 시선을 옮긴다."

    yujin "남수연! 또 몰래 탄거야? 으아!"

    narration "낮익은 상황에 머리를 쥐어 뜯기 시작하는 유진이었다."






#### DAY 2 ####
### SCENE DAY2 - NIGHT - ROOM
label day2_morning_lobby:

    scene bg lobby_light




    show yujin discomfort


## Selection (day2_morning_lobby_selection)
menu:

    "구명보트를 사용하자.":
        jump day2_morning_lobby_selection1


    "구명보트를 사용할 필요는 없다.":
        jump day2_morning_lobby_selection2



## Selection 1
label day2_morning_lobby_selection1:


    scene bg lifeBoat_dark

    show haru disgusting at right

    haru "0ㅇ0"

    scene bg noLifeBoat_dark

    show haru scaryLaugh at right

    haru "0ㅇ0!!!!!!"


    jump endGame
## END OF day2_morning_lobby_selection1



## Selection 2
label day2_morning_lobby_selection2:

    haru "ㅇㅅㅇ"

    jump day2_afternoon_hall
## END OF day2_morning_lobby_selection2




label day2_afternoon_hall:

   scene bg hall_light

   haru "ㅇㅅㅇ!!!"






label endGame:

    return
