export const extendedServices = [
  // I. TRỊ LIỆU TOÀN THÂN
  {
    id: 'body-aroma',
    category: { vi: 'Trị Liệu Toàn Thân', en: 'Body Therapy', jp: 'ボディセラピー' },
    name: { vi: "Aroma Massage", en: "Aroma Massage", jp: "アロママッサージ" },
    duration: "60 / 90 phút",
    price: "450k / 550k",
    description: { vi: "Thư giãn nhẹ nhàng với tinh dầu thiên nhiên.", en: "Gentle relaxation with natural oils.", jp: "天然オイルによる穏やかなリラクゼーション。" },
    longDescription: {
      vi: "Liệu pháp sử dụng tinh dầu hữu cơ kết hợp kỹ thuật massage vuốt miết mềm mại, giúp tinh thần dịu lại và xua tan mệt mỏi.",
      en: "Therapy using organic oils combined with gentle massage techniques to calm the mind and banish fatigue.",
      jp: "オーガニックオイルと穏やかなマッサージ技術を組み合わせたセラピーで、心を落ち着かせ、疲労を解消します。"
    },
    benefits: {
      vi: ["Giảm stress", "Mềm mại làn da", "Ngủ ngon"],
      en: ["Stress relief", "Soft skin", "Better sleep"],
      jp: ["ストレス軽減", "肌の軟化", "安眠"]
    },
    images: ["/aroma.jpg", "/1293911440826339391.jpg", "/1612625643177023838.jpg"]
  },
  {
    id: 'body-hotstone',
    category: { vi: 'Trị Liệu Toàn Thân', en: 'Body Therapy', jp: 'ボディセラピー' },
    name: { vi: "Trị liệu Đá Nóng", en: "Hot Stone Therapy", jp: "ホットストーンセラピー" },
    duration: "60 / 90 phút",
    price: "480k / 580k",
    description: { vi: "Nhiệt ấm từ đá giúp làm mềm cơ và phục hồi.", en: "Warm stones soften muscles and aid recovery.", jp: "温かい石が筋肉を和らげ、回復を助けます。" },
    longDescription: {
      vi: "Sử dụng những viên đá núi lửa giữ nhiệt, tác động sâu vào các huyệt đạo để giải phóng năng lượng tắc nghẽn.",
      en: "Uses volcanic stones that retain heat, acting deeply on acupoints to release blocked energy.",
      jp: "熱を保持する火山石を使用し、ツボに深く働きかけて滞ったエネルギーを解放します。"
    },
    benefits: {
      vi: ["Giãn cơ", "Thải độc", "Giảm đau khớp"],
      en: ["Muscle relaxation", "Detoxification", "Joint pain relief"],
      jp: ["筋肉の弛緩", "デトックス", "関節痛の軽減"]
    },
    images: ["/1293911440826339391.jpg", "/1612625643177023838.jpg", "/1010574840257195780.jpg"]
  },
  {
    id: 'body-herbal',
    category: { vi: 'Trị Liệu Toàn Thân', en: 'Body Therapy', jp: 'ボディセラピー' },
    name: { vi: "Trị liệu Bóng Thảo Dược", en: "Herbal Ball Therapy", jp: "ハーバルボールセラピー" },
    duration: "60 / 90 phút",
    price: "520k / 610k",
    description: { vi: "Hơi ấm thảo dược lan sâu vào cơ thể.", en: "Herbal warmth penetrates deep into the body.", jp: "ハーブの温もりが体の深部まで浸透します。" },
    longDescription: {
      vi: "Các túi thảo dược được hấp nóng và ấn nhẹ trực tiếp lên cơ thể, giúp dưỡng chất thảo mộc thẩm thấu sâu.",
      en: "Steamed herbal bags are gently pressed directly onto the body, allowing herbal nutrients to penetrate deeply.",
      jp: "蒸したハーブバッグを体に直接優しく押し当て、ハーブの栄養分を深部まで浸透させます。"
    },
    benefits: {
      vi: ["Ấm cơ thể", "Hương thơm thư giãn", "Trị đau mỏi"],
      en: ["Warm body", "Relaxing aroma", "Pain relief"],
      jp: ["体温上昇", "リラックスする香り", "痛みの緩和"]
    },
    images: ["/1612625643177023838.jpg", "/1010574840257195780.jpg", "/1293911440826339391.jpg"]
  },
  {
    id: 'signature-ngai',
    category: { vi: 'Signature', en: 'Signature', jp: 'シグネチャー' },
    name: { vi: "Trị liệu Ngải Đặc Biệt", en: "Special Moxa Therapy", jp: "スペシャルもぐさセラピー" },
    duration: "60 / 90 phút",
    price: "599k / 699k",
    badge: "HOT",
    description: { vi: "Lựa chọn phục hồi ổn định thay vì chỉ thư giãn tạm thời.", en: "Stable recovery instead of temporary relaxation.", jp: "一時的なリラックスではなく、安定した回復のために。" },
    longDescription: {
      vi: "Hơi ấm từ điếu ngải giúp làm ấm sâu và hỗ trợ lưu thông tốt hơn, đặc biệt giúp giải toả căng thẳng và đau mỏi toàn thân.",
      en: "Warmth from moxa stick helps warm deep and supports better circulation, especially relieving stress and full body aches.",
      jp: "もぐさのお灸による温かさが深部まで届き、血行を促進し、ストレスや全身の痛みを和らげます。"
    },
    benefits: {
      vi: ["Lưu thông khí huyết", "Làm ấm sâu", "Giảm đau mỏi"],
      en: ["Blood circulation", "Deep warming", "Ache relief"],
      jp: ["血行促進", "深部温熱", "痛みの緩和"]
    },
    images: ["/1612625643177023838 (1).jpg", "/2842425705773877145.jpg", "/1612625643177023838.jpg"]
  },
  {
    id: 'signature-salt',
    category: { vi: 'Signature', en: 'Signature', jp: 'シグネチャー' },
    name: { vi: "Muối Phục Dược", en: "Recovery Salt Therapy", jp: "リカバリーソルトセラピー" },
    duration: "60 / 90 phút",
    price: "599k / 699k",
    badge: "95% back",
    description: { vi: "Muối sao thảo mộc đặc trị đau mỏi vai gáy.", en: "Herb salt therapy for neck and shoulder pain.", jp: "首や肩の痛みのためのハーブ塩セラピー。" },
    longDescription: {
      vi: "Muối sao thảo mộc thủ công giữ nhiệt bền bỉ để làm tan các bó cơ xơ cứng. Giải pháp đặc trị cho người ngồi lâu, ít vận động.",
      en: "Hand-roasted herb salts retain heat persistently to dissolve stiff muscle bundles. A specialized solution for desk workers.",
      jp: "手作りのハーブ塩が熱を保持し、凝り固まった筋肉をほぐします。デスクワークの方への専門的なソリューション。"
    },
    benefits: {
      vi: ["Tan bó cơ", "Khơi thông kinh lạc", "Nhẹ nhõm tức thì"],
      en: ["Dissolve tension", "Clear meridians", "Instant relief"],
      jp: ["緊張緩和", "経絡の浄化", "即時の安らぎ"]
    },
    images: ["/1293911440826339391.jpg", "/1010574840257195780.jpg", "/1612625643177023838.jpg"]
  },
  {
    id: 'signature-mud',
    category: { vi: 'Signature', en: 'Signature', jp: 'シグネチャー' },
    name: { vi: "Bùn Cứu Dưỡng Sinh", en: "Nutritional Mud Healing", jp: "養生泥セラピー" },
    duration: "60 / 90 phút",
    price: "599k / 699k",
    badge: "Must try",
    description: { vi: "Trục xuất hàn khí và độc tố ra khỏi xương khớp.", en: "Expel cold and toxins from joints.", jp: "関節から冷えや毒素を排出します。" },
    longDescription: {
      vi: "Lớp bùn dược tính đóng vai trò như máy hút để trục xuất hàn khí. Làm ấm vùng lõi cơ thể, giải phóng áp lực tại các khớp.",
      en: "Therapeutic mud layer acts as a vacuum to expel cold. Warms the body core and releases joint pressure.",
      jp: "薬用泥が冷えを排出する吸引機のように働きます。体の芯を温め、関節の圧力を解放します。"
    },
    benefits: {
      vi: ["Thải độc xương khớp", "Ấm lõi cơ thể", "Cải thiện giấc ngủ"],
      en: ["Joint detox", "Warm body core", "Better sleep"],
      jp: ["関節解毒", "芯の温熱", "睡眠改善"]
    },
    images: ["/1612625643177023838 (1).jpg", "/2842425705773877145.jpg", "/1293911440826339391.jpg"]
  },
  {
    id: 'body-intensive-120',
    category: { vi: 'Phục Hồi Chuyên Sâu', en: 'Intensive Recovery', jp: '集中回復' },
    name: { vi: "Dưỡng sinh toàn diện 120’", en: "Full Wellness 120m", jp: "総合ウェルネス 120分" },
    duration: "120 phút",
    price: "860k",
    description: { vi: "Nghi thức trọn vẹn nhất tại ICHI SPA.", en: "The most complete ritual at ICHI SPA.", jp: "ICHI SPAで最も完全な儀式。" },
    longDescription: {
      vi: "Kết hợp Muối Phục Dược và ngải giữ nhiệt sâu, giúp cơ thể được làm ấm đủ lâu để thả lỏng và phục hồi rõ rệt.",
      en: "Combines Recovery Salt and Moxa for deep heat, allowing the body to relax and recover visibly.",
      jp: "リカバリーソルトともぐさを組み合わせた深部温熱で、体がリラックスし、目に見えて回復します。"
    },
    benefits: {
      vi: ["Phục hồi tầng sâu", "Thư giãn tuyệt đối", "Tái tạo năng lượng"],
      en: ["Deep recovery", "Total relaxation", "Energy renewal"],
      jp: ["深層回復", "完全な休息", "エネルギー再生"]
    },
    images: ["/1612625643177023838.jpg", "/1293911440826339391.jpg", "/1010574840257195780.jpg"]
  },

  // II. TRỊ LIỆU CỔ VAI GÁY
  {
    id: 'neck-shoulder-intensive',
    category: { vi: 'Cổ Vai Gáy', en: 'Neck & Shoulder', jp: '首・肩' },
    name: { vi: "Trị liệu chuyên sâu", en: "Intensive Therapy", jp: "集中セラピー" },
    duration: "60 / 90 phút",
    price: "490k / 590k",
    description: { vi: "Giải phóng điểm căng cứng vùng vai gáy.", en: "Release tension in neck & shoulders.", jp: "首と肩の緊張を和らげます。" },
    longDescription: {
      vi: "Tập trung vào vùng bị bó cơ do ngồi máy tính lâu, khôi phục sự linh hoạt cho toàn bộ vùng lưng trên.",
      en: "Focuses on muscle tension caused by long computer use, restoring flexibility to the upper back.",
      jp: "長時間のパソコン使用による筋肉の緊張に焦点を当て、背中上部の柔軟性を取り戻します。"
    },
    benefits: {
      vi: ["Giảm đau vai gáy", "Hết tê mỏi", "Tăng linh hoạt"],
      en: ["Reduce pain", "No more numbness", "Increase flexibility"],
      jp: ["痛みの軽減", "しびれの解消", "柔軟性向上"]
    },
    images: ["/1010574840257195780.jpg", "/1612625643177023838.jpg", "/1293911440826339391.jpg"]
  },

  // III. TRỊ LIỆU VÙNG CHÂN
  {
    id: 'foot-hotstone',
    category: { vi: 'Trị Liệu Chân', en: 'Foot Therapy', jp: 'フットセラピー' },
    name: { vi: "Đá Nóng Vùng Chân", en: "Foot Hot Stone", jp: "フットホットストーン" },
    duration: "60 / 90 phút",
    price: "390k / 490k",
    description: { vi: "Làm ấm bàn chân, giảm cảm giác nặng nề.", en: "Warms feet, reduces heaviness.", jp: "足を温め、重さを軽減します。" },
    longDescription: {
      vi: "Sử dụng nhiệt từ đá nóng để kích thích tuần hoàn máu ở bàn chân, nơi chứa hàng nghìn đầu dây thần kinh.",
      en: "Uses heat from stones to stimulate blood circulation in the feet, home to thousands of nerve endings.",
      jp: "数千の神経末端がある足の血液循環を、石の熱で促進します。"
    },
    benefits: {
      vi: ["Hết nặng chân", "Giảm tê mỏi", "Dễ ngủ"],
      en: ["Light feet", "Reduce fatigue", "Easier sleep"],
      jp: ["足の軽快感", "疲労軽減", "入眠促進"]
    },
    images: ["/1293911440826339391.jpg", "/1010574840257195780.jpg", "/1612625643177023838.jpg"]
  },
  {
    id: 'foot-herbal',
    category: { vi: 'Trị Liệu Chân', en: 'Foot Therapy', jp: 'フットセラピー' },
    name: { vi: "Bóng Thảo Dược Vùng Chân", en: "Foot Herbal Ball", jp: "フットハーバルボール" },
    duration: "60 / 90 phút",
    price: "460k / 550k",
    description: { vi: "Hơi ấm thảo dược từ lòng bàn chân.", en: "Herbal warmth from the soles.", jp: "足裏から伝わるハーブの温もり。" },
    longDescription: {
      vi: "Các loại dược liệu quý giúp làm mềm cơ và hỗ trợ lưu thông, phù hợp cho người đứng lâu hoặc dễ lạnh chân.",
      en: "Precious herbs help soften muscles and support circulation, ideal for those standing long durations.",
      jp: "貴重なハーブが筋肉を和らげ血行を助けます。長時間立っている方に最適です。"
    },
    benefits: {
      vi: ["Ấm bàn chân", "Mềm bó cơ", "Thải độc chân"],
      en: ["Warm feet", "Soft muscles", "Foot detox"],
      jp: ["足の温熱", "筋肉の弛緩", "足のデトックス"]
    },
    images: ["/1612625643177023838.jpg", "/1293911440826339391.jpg", "/1010574840257195780.jpg"]
  },

  // TẨY TẾ BÀO CHẾT
  {
    id: 'scrub-body',
    category: { vi: 'Tẩy Tế Bào Chết', en: 'Exfoliation', jp: '角質除去' },
    name: { vi: "Tẩy da chết toàn thân", en: "Full Body Scrub", jp: "全身スクラブ" },
    duration: "45 phút",
    price: "599k",
    description: { vi: "Làm sạch sâu, mang lại làn da mịn màng.", en: "Deep cleansing for smooth skin.", jp: "滑らかな肌のための深層浄化。" },
    longDescription: {
      vi: "Loại bỏ sạch lớp tế bào sừng cỗi tích tụ lâu ngày, giúp lỗ chân lông thông thoáng và làn da sáng khỏe.",
      en: "Removes accumulated dead skin cells, helping pores breathe and skin become bright.",
      jp: "蓄積した古い角質を取り除き、毛穴を整え、明るい肌へ導きます。"
    },
    benefits: {
      vi: ["Mịn màng", "Sáng da", "Thư giãn"],
      en: ["Smoothness", "Bright skin", "Relaxation"],
      jp: ["滑らかさ", "美白効果", "リラックス"]
    },
    images: ["/2842425705773877145.jpg", "/1612625643177023838 (1).jpg", "/1293911440826339391.jpg"]
  },
  {
    id: 'scrub-foot',
    category: { vi: 'Tẩy Tế Bào Chết', en: 'Exfoliation', jp: '角質除去' },
    name: { vi: "Tẩy da chết chân", en: "Foot Scrub", jp: "フットスクラブ" },
    duration: "20 phút",
    price: "290k",
    description: { vi: "Phục hồi gót ngọc, mềm mại đôi chân.", en: "Restore soft heels and feet.", jp: "柔らかいかかとと足を復元します。" },
    longDescription: {
      vi: "Tình trạng nứt nẻ, thô ráp vùng gót chân sẽ được cải thiện hoàn toàn với quy trình ngâm chân và tẩy tế bào chết chuyên sâu.",
      en: "Cracked, rough heels will be completely improved with a professional soak and scrub process.",
      jp: "かかとのひび割れやガサガサを、専門的な足湯とスクラブで完全に改善します。"
    },
    benefits: {
      vi: ["Mềm gót chân", "Sạch sâu", "Hết thô ráp"],
      en: ["Soft heels", "Cleanse", "No roughness"],
      jp: ["かかと軟化", "浄化", "ざらつき解消"]
    },
    images: ["/1293911440826339391.jpg", "/1612625643177023838 (1).jpg", "/2842425705773877145.jpg"]
  },

  // CHĂM SÓC DA MẶT
  {
    id: 'facial-basic',
    category: { vi: 'Chăm Sóc Da Mặt', en: 'Facial Care', jp: 'フェイシャルケア' },
    name: { vi: "Dưỡng sinh da mặt", en: "Basic Facial", jp: "ベーシックフェイシャル" },
    duration: "30 phút",
    price: "550k",
    description: { vi: "Làm sạch và thư giãn nhẹ nhàng.", en: "Cleansing and gentle relaxation.", jp: "クレンジングと穏やかな休息。" },
    longDescription: {
      vi: "Quy trình làm sạch chuyên sâu giúp loại bỏ bụi bẩn, bã nhờn, trả lại sự thông thoáng và sức sống cho vùng mặt.",
      en: "Intensive cleansing process helps remove dirt and sebum, restoring clarity and vitality to the face.",
      jp: "深層クレンジングにより汚れや皮脂を取り除き、顔に透明感と活力をもたらします。"
    },
    benefits: {
      vi: ["Sạch da", "Thư giãn mặt", "Sáng da"],
      en: ["Clean skin", "Facial relax", "Bright skin"],
      jp: ["肌の浄化", "顔の休息", "美白"]
    },
    images: ["/1293911440826339391.jpg", "/1010574840257195780.jpg", "/1612625643177023838.jpg"]
  },
  {
    id: 'facial-intensive',
    category: { vi: 'Chăm Sóc Da Mặt', en: 'Facial Care', jp: 'フェイシャルケア' },
    name: { vi: "Dưỡng sinh chuyên sâu", en: "Intensive Facial", jp: "集中フェイシャル" },
    duration: "60 phút",
    price: "880k",
    description: { vi: "Nuôi dưỡng, giúp da rạng rỡ, ẩm mịn.", en: "Deeply nourish for radiant skin.", jp: "輝く肌のための深層栄養補給。" },
    longDescription: {
      vi: "Kết hợp các dưỡng chất cao cấp cùng kỹ thuật massage nâng cơ, giúp da hấp thụ trọn vẹn tinh túy thảo mộc.",
      en: "Combines premium nutrients with lifting massage techniques to help the skin fully absorb herbal essences.",
      jp: "プレミアム栄養分とリフティング技術を組み合わせ、ハーブのエッセンスを肌に完全に吸収させます。"
    },
    benefits: {
      vi: ["Ẩm mịn", "Trẻ hóa", "Căng bóng"],
      en: ["Hydration", "Rejuvenation", "Radiance"],
      jp: ["保湿", "若返り", "輝き"]
    },
    images: ["/1612625643177023838 (1).jpg", "/2842425705773877145.jpg", "/1293911440826339391.jpg"]
  },

  // GỘI ĐẦU DƯỠNG SINH
  {
    id: 'hair-basic',
    category: { vi: 'Gội Đầu', en: 'Hair Care', jp: 'ヘアケア' },
    name: { vi: "Gội sạch", en: "Clean Wash", jp: "クリーンウォッシュ" },
    duration: "30 phút",
    price: "99k",
    description: { vi: "Làm sạch thảo dược nhẹ nhàng.", en: "Gentle herbal cleansing.", jp: "穏やかなハーブクレンジング。" },
    longDescription: {
      vi: "Sử dụng nước thảo mộc nấu thủ công để làm sạch da đầu, kết hợp động tác gãi nhẹ nhàng xua tan căng thẳng vùng đầu.",
      en: "Uses handcrafted herbal water to cleanse the scalp, combined with gentle scratching to relieve head tension.",
      jp: "手作りのハーブ水で頭皮を清浄し、穏やかな頭皮ケアで緊張をほぐします。"
    },
    benefits: {
      vi: ["Sạch gàu", "Mượt tóc", "Nhẹ đầu"],
      en: ["No dandruff", "Smooth hair", "Light head"],
      jp: ["フケ防止", "滑らかな髪", "軽快な頭"]
    },
    images: ["/1612625643177023838.jpg", "/1010574840257195780.jpg", "/1293911440826339391.jpg"]
  },
  {
    id: 'hair-neck',
    category: { vi: 'Gội Đầu', en: 'Hair Care', jp: 'ヘアケア' },
    name: { vi: "Gội cổ vai gáy", en: "Neck & Shoulder Wash", jp: "首・肩リラックスシャンプー" },
    duration: "45 phút",
    price: "250k",
    description: { vi: "Gội dưỡng sinh kết hợp massage.", en: "Hair wash combined with massage.", jp: "シャンプーとマッサージの融合。" },
    longDescription: {
      vi: "Không chỉ dừng lại ở gội đầu, liệu trình còn tập trung xoa bóp vùng cổ vai gáy để mang lại sự thư giãn kép.",
      en: "Beyond just hair washing, the treatment focuses on massaging the neck and shoulders for double relaxation.",
      jp: "洗髪だけでなく、首や肩のマッサージにも注力し、二重のリラクゼーションを提供します。"
    },
    benefits: {
      vi: ["Giảm mỏi gáy", "Mượt tóc", "Thoải mái"],
      en: ["Reduce neck pain", "Smooth hair", "Comfort"],
      jp: ["首の疲れ軽減", "滑らかな髪", "快適さ"]
    },
    images: ["/1010574840257195780.jpg", "/1293911440826339391.jpg", "/1612625643177023838.jpg"]
  },
  {
    id: 'hair-pro',
    category: { vi: 'Gội Đầu', en: 'Hair Care', jp: 'ヘアケア' },
    name: { vi: "Gội chuyên sâu", en: "Intensive N&S Wash", jp: "首・肩シャンプー全集" },
    duration: "60 phút",
    price: "350k",
    description: { vi: "Làm mềm cơ vùng vai gáy mỏi nhiều.", en: "Soften muscles for severe aches.", jp: "深刻な凝りを和らげるシャンプー。" },
    longDescription: {
      vi: "Dành cho những ngày mệt mỏi cực độ, kỹ thuật ấn huyệt sâu kết hợp tinh chất thảo mộc giúp giải phóng hoàn toàn sự tắc nghẽn.",
      en: "For days of extreme fatigue, deep acupressure combined with herbal essences helps completely release blockages.",
      jp: "極度に疲れた日のために、深部指圧とハーブエッセンスが滞りを完全に解消します。"
    },
    benefits: {
      vi: ["Hết căng cứng", "Phục hồi năng lượng", "Dưỡng tóc chuyên sâu"],
      en: ["No stiffness", "Restore energy", "Intensive hair care"],
      jp: ["凝り解消", "エネルギー回復", "集中ヘアケア"]
    },
    images: ["/1612625643177023838 (1).jpg", "/2842425705773877145.jpg", "/1293911440826339391.jpg"]
  }
];
