export const menuData = {
  body: {
    title: { 
      vi: "Body & Foot Liệu Trình", 
      en: "Body & Foot Therapy", 
      jp: "ボディ＆フットセラピー",
      ko: "바디 & 풋 테라피",
      zh: "身体和足部理疗"
    },
    sections: [
      {
        subtitle: { 
          vi: "I. Liệu Trình Toàn Thân (Thư giãn cơ bản)", 
          en: "I. Full Body Therapy (Basic)", 
          jp: "I. 全身セラピー（ベーシック）",
          ko: "I. 전신 테라피 (베이직)",
          zh: "I. 全身理疗（基础）"
        },
        items: [
          {
            name: { vi: "Aroma Massage", en: "Aroma Massage", jp: "アロママッサージ", ko: "아로마 마사지", zh: "精油按摩" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60분", "90분"], ko: ["60분", "90분"], zh: ["60分钟", "90分钟"] },
            description: { 
              vi: "Thư giãn nhẹ nhàng với tinh dầu thiên nhiên, giúp cơ thể thả lỏng và tinh thần dịu lại.",
              en: "Gentle relaxation with natural oils to help the body loosen up and calm the spirit.",
              jp: "天然オイルを使用した穏やかなリラクゼーションで、体の緊張をほぐし、心を落ち着かせます。",
              ko: "천연 오일을 이용한 부드러운 휴식으로 몸의 긴장을 풀고 마음을 진정시켜 줍니다.",
              zh: "使用天然精油进行温和放松，帮助身体放松并平静精神。"
            },
            price: { vi: "450.000 / 550.000", en: "450k / 550k", jp: "450k / 550k", ko: "450k / 550k", zh: "450k / 550k" }
          },
          {
            name: { vi: "Liệu trình toàn thân với Đá Nóng", en: "Hot Stone Body Therapy", jp: "ホットストーン・ボディセラピー", ko: "핫스톤 전신 테라피", zh: "热石全身理疗" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60분", "90분"], ko: ["60분", "90분"], zh: ["60分钟", "90分钟"] },
            description: {
              vi: "Nhiệt ấm giúp làm mềm cơ và hỗ trợ cơ thể phục hồi sau những ngày căng thẳng.",
              en: "Warm heat helps soften muscles and supports recovery after stressful days.",
              jp: "温かい熱が筋肉を和らげ、ストレスの多い日々からの回復をサポートします。",
              ko: "따뜻한 열기가 근육을 이완시키고 피로 누적된 몸의 회복을 돕습니다.",
              zh: "温热有助于软化肌肉，并支持在压力大日子后的身体恢复。"
            },
            price: { vi: "480.000 / 580.000", en: "480k / 580k", jp: "480k / 580k", ko: "480k / 580k", zh: "480k / 580k" }
          }
        ]
      },
      {
        subtitle: { 
          vi: "Liệu trình chuyên sâu", 
          en: "Intensive Therapy", 
          jp: "集中セラピー",
          ko: "집중 테라피",
          zh: "深度理疗"
        },
        items: [
          {
            name: { vi: "Liệu trình toàn thân với Bóng Thảo Dược", en: "Herbal Ball Body Therapy", jp: "ハーバルボール・ボディセラピー", ko: "허브볼 전신 테라피", zh: "草本球全身理疗" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60분", "90분"], ko: ["60분", "90분"], zh: ["60分钟", "90分钟"] },
            description: {
              vi: "Hơi ấm thảo dược lan sâu, phù hợp với cơ thể đau mỏi kéo dài.",
              en: "Deep herbal warmth, perfect for lingering body aches.",
              jp: "ハーブの深層的な温かさが、長引く体の痛みに最適です。",
              ko: "허브의 깊은 온기가 전달되어 만성적인 통증 완화에 효과적입니다.",
              zh: "草本热力深层渗透，适合长期身体疲劳。"
            },
            price: { vi: "520.000 / 610.000", en: "520k / 610k", jp: "520k / 610k", ko: "520k / 610k", zh: "520k / 610k" }
          }
        ]
      },
      {
        subtitle: { 
          vi: "⭐ SIGNATURE - ĐƯỢC TIN CHỌN NHIỀU NHẤT", 
          en: "⭐ SIGNATURE - MOST CHOSEN", 
          jp: "⭐ シグネチャー - 最も選ばれているメニュー",
          ko: "⭐ 시그니처 - 가장 인기 있는 메뉴",
          zh: "⭐ 招牌推荐 - 最受欢迎"
        },
        items: [
          {
            name: { vi: "Liệu trình Toàn Thân với Ngải Đặc Biệt", en: "Special Moxa Therapy", jp: "スペシャルもぐさセラピー", ko: "특별 쑥뜸 전신 테라피", zh: "特色艾灸全身理疗" },
            badge: "HOT",
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60분", "90分"], ko: ["60분", "90분"], zh: ["60分钟", "90分钟"] },
            description: {
              vi: "Hơi ấm từ điếu ngải giúp làm ấm sâu và lưu thông tốt hơn, giải toả căng thẳng và đau mỏi.",
              en: "Warmth from moxa stick helps warm deep and circulate better, relieving stress and aches.",
              jp: "もぐさのお灸による温かさが深部まで届き、血行を促進し、ストレスや痛みを和らげます。",
              ko: "쑥뜸의 온기가 심부까지 전달되어 기혈 순환을 돕고 스트레스와 통증을 완화해 줍니다.",
              zh: "艾条的热量有助于深层加温并改善循环，缓解压力和酸痛。"
            },
            price: { vi: "599.000 / 699.000", en: "599k / 699k", jp: "599k / 699k", ko: "599k / 699k", zh: "599k / 699k" }
          },
          {
            name: { vi: "Liệu trình Toàn Thân với MUỐI PHỤC DƯỢC", en: "RECOVERY SALT Therapy", jp: "リカバリーソルトセラピー", ko: "리커버리 솔트 테라피", zh: "药盐修复全身理疗" },
            badge: "95% back",
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60분", "90分"], ko: ["60분", "90분"], zh: ["60分钟", "90分钟"] },
            description: {
              vi: "Muối sao thảo mộc thủ công, đặc trị đau mỏi vai gáy, lưng và tê bì tay chân.",
              en: "Hand-roasted herb salts, specialized for neck, shoulder, and back pain.",
              jp: "手作りのハーブ塩が、首、肩、背中の痛みや手足のしびれを解消します。",
              ko: "수제 허브 소금을 사용하여 목, 어깨, 등에 담긴 근육과 저림 증상을 완화합니다.",
              zh: "手工炒制草本盐，专治颈肩腰痛及手脚麻木。"
            },
            price: { vi: "599.000 / 699.000", en: "599k / 699k", jp: "599k / 699k", ko: "599k / 699k", zh: "599k / 699k" }
          },
          {
            name: { vi: "Liệu Trình Toàn Thân với Bùn Cứu Dưỡng Sinh", en: "Nutritional Mud Healing", jp: "養生泥セラピー", ko: "영양 머드 힐링 테라피", zh: "养生泥灸全身理疗" },
            badge: "Must try",
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60분", "90分"], ko: ["60분", "90분"], zh: ["60分钟", "90分钟"] },
            description: {
              vi: "Lớp bùn dược tính giúp trục xuất hàn khí và độc tố. Làm ấm vùng lõi cơ thể.",
              en: "Therapeutic mud layer expels cold and toxins. Warms the body core.",
              jp: "薬用泥が冷えや毒素を排出します。体の芯から温めます。",
              ko: "약용 머드층이 체내 냉기와 독소를 배출하고 몸의 심부를 따뜻하게 해줍니다.",
              zh: "药泥层有助于排除寒气和毒素。温暖身体核心。"
            },
            price: { vi: "599.000 / 699.000", en: "599k / 699k", jp: "599k / 699k", ko: "599k / 699k", zh: "599k / 699k" }
          }
        ]
      },
      {
        subtitle: { 
          vi: "🌿 LIỆU TRÌNH PHỤC HỒI CHUYÊN SÂU 120’", 
          en: "🌿 INTENSIVE RECOVERY (120 min)", 
          jp: "🌿 集中集中回復 (120分)",
          ko: "🌿 집중 회복 프로그램 (120분)",
          zh: "🌿 120分钟深度恢复疗程"
        },
        items: [
          {
            name: { vi: "Nghi thức dưỡng sinh toàn diện", en: "Full Wellness Ritual", jp: "総合ウェルネス儀式", ko: "종합 웰니스 리추얼", zh: "全效养生仪式" },
            duration: { vi: ["120 phút"], en: ["120 min"], jp: ["120分"], ko: ["120분"], zh: ["120分钟"] },
            description: {
              vi: "Kết hợp Muối Phục Dược and ngải, giúp cơ thể thả lỏng và phục hồi rõ rệt.",
              en: "Combines Recovery Salt and Moxa for visible relaxation and recovery.",
              jp: "リカバリーソルトともぐさを組み合わせ,目に見えるリラクゼーションと回復を促します。",
              ko: "리커버리 솔트와 쑥뜸을 결합하여 몸의 이완과 눈에 띄는 회복을 돕습니다.",
              zh: "结合修复盐和艾灸，帮助身体放松并有明显的恢复。"
            },
            price: { vi: "860.000", en: "860k", jp: "860k", ko: "860k", zh: "860k" }
          }
        ]
      }
    ]
  },
  neck_shoulder: {
    title: { vi: "Cổ Vai Gáy", en: "Neck & Shoulder", jp: "首・肩", ko: "목과 어깨", zh: "颈肩护理" },
    sections: [
      {
        subtitle: { vi: "II. LIỆU TRÌNH CỔ VAI GÁY", en: "II. NECK & SHOULDER THERAPY", jp: "II. 首・肩セラピー", ko: "II. 목과 어깨 테라피", zh: "II. 颈肩理疗" },
        items: [
          {
            name: { vi: "Liệu trình Cổ Vai Gáy Chuyên Sâu", en: "Intensive Neck & Shoulder", jp: "首・肩集中ケア", ko: "목/어깨 집중 케어", zh: "深度颈肩理疗" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"], ko: ["60분", "90분"], zh: ["60分钟", "90分钟"] },
            description: { 
              vi: "Tập trung giải phóng các điểm căng cứng vùng cổ – vai – lưng trên. Phù hợp cho dân văn phòng.",
              en: "Focus on releasing tension in neck, shoulders, and upper back. Ideal for office workers.",
              jp: "首、肩、背中上部の緊張を和らげることに集中します。オフィスワーカーに最適です。",
              ko: "목, 어깨, 상체의 뭉친 근육을 집중적으로 풀어줍니다. 사무직 직장인에게 추천합니다.",
              zh: "重点缓解颈部、肩部和上背部的僵硬点。适合办公室人员。"
            },
            price: { vi: "490.000 / 590.000", en: "490k / 590k", jp: "490k / 590k", ko: "490k / 590k", zh: "490k / 590k" }
          }
        ]
      }
    ]
  },
  foot: {
    title: { vi: "Liệu Trình Chân", en: "Foot Therapy", jp: "フットセラピー", ko: "풋 테라피", zh: "足部理疗" },
    sections: [
      {
        subtitle: { vi: "III. LIỆU TRÌNH VÙNG CHÂN", en: "III. FOOT THERAPY", jp: "III. フットセラピー", ko: "III. 풋 테라피 프로그램", zh: "III. 足部区域理疗" },
        items: [
          {
            name: { vi: "Liệu trình chân với Đá Nóng", en: "Foot Hot Stone Therapy", jp: "フットホットストーン", ko: "발 전용 핫스톤 테라피", zh: "足部热石理疗" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"], ko: ["60분", "90분"], zh: ["60分钟", "90分钟"] },
            description: { 
              vi: "Làm ấm bàn chân và bắp chân, giảm cảm giác nặng - tê - mỏi.",
              en: "Warms feet and calves, reducing heaviness and numbness.",
              jp: "足とふくらはぎを温め、重さやしびれを軽減します。",
              ko: "발과 종아리를 따뜻하게 하여 무거움과 저림, 피로를 완화해 줍니다.",
              zh: "温暖足部和小腿，减轻沉重感、麻木感和疲劳感。"
            },
            price: { vi: "390.000 / 490.000", en: "390k / 490k", jp: "390k / 490k", ko: "390k / 490k", zh: "390k / 490k" }
          },
          {
            name: { vi: "Liệu trình chân với Bóng Thảo Dược", en: "Foot Herbal Ball Therapy", jp: "フットハーバルボール", ko: "발 전용 허브볼 테라피", zh: "足部草本球理疗" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"], ko: ["60분", "90분"], zh: ["60分钟", "90分钟"] },
            description: { 
              vi: "Hơi ấm thảo dược giúp làm mềm cơ và hỗ trợ lưu thông tốt hơn.",
              en: "Herbal warmth softens muscles and supports better circulation.",
              jp: "ハーブの温かさが筋肉を和らげ、血行 को促進します。",
              ko: "허브의 온기가 근육을 부드럽게 하고 혈액순환을 원활하게 돕습니다.",
              zh: "草本热力有助于软化肌肉并改善循环。"
            },
            price: { vi: "460.000 / 550.000", en: "460k / 550k", jp: "460k / 550k", ko: "460k / 550k", zh: "460k / 550k" }
          }
        ]
      }
    ]
  },
  exfoliation: {
    title: { vi: "Tẩy Tế Bào Chết", en: "Exfoliation", jp: "角質除去", ko: "각질 제거", zh: "去角质" },
    sections: [
      {
        subtitle: { vi: "TẨY TẾ BÀO CHẾT", en: "BODY & FOOT SCRUB", jp: "ボディ＆フットスクラブ", ko: "바디 & 풋 스크럽", zh: "身体和足部磨砂" },
        items: [
          {
            name: { vi: "Tẩy da chết toàn thân", en: "Full Body Scrub", jp: "全身スクラブ", ko: "전신 스크럽", zh: "全身去角质" },
            duration: { vi: ["45 phút"], en: ["45 min"], jp: ["45分"], ko: ["45분"], zh: ["45分钟"] },
            description: { 
              vi: "Làm sạch lớp da chết tích tụ, mang lại làn da mềm mại, tươi mới.",
              en: "Clears dead skin accumulation for soft, refreshed skin.",
              jp: "蓄積した角質を取り除き、柔らかくリフレッシュした肌へ導きます。",
              ko: "축적된 각질을 제거하여 부드럽고 생기 있는 피부로 가꾸어 줍니다.",
              zh: "清除累积的死皮细胞，使皮肤柔软清新。"
            },
            price: { vi: "599.000", en: "599k", jp: "599k", ko: "599k", zh: "599k" }
          },
          {
            name: { vi: "Tẩy da chết chân", en: "Foot Scrub", jp: "フットスクラブ", ko: "발 스크럽", zh: "足部去角质" },
            duration: { vi: ["20 phút"], en: ["20 min"], jp: ["20分"], ko: ["20분"], zh: ["20分钟"] },
            description: { 
              vi: "Phục hồi gót ngọc với tẩy tế bào chết và ngâm chân.", 
              en: "Restore your heels with scrub and foot soak.", 
              jp: "スクラブと足湯でかかとをケアします。",
              ko: "스크럽과 족욕으로 매끄러운 발뒤꿈치를 되찾아 줍니다.",
              zh: "通过去角质和足浴修复脚后跟。"
            },
            price: { vi: "290.000", en: "290k", jp: "290k", ko: "290k", zh: "290k" }
          }
        ]
      }
    ]
  },
  facial: {
    title: { vi: "Chăm Sóc Da Mặt", en: "Facial Care", jp: "フェイシャルケア", ko: "페이셜 케어", zh: "面部护理" },
    sections: [
      {
        subtitle: { vi: "CHĂM SÓC DA MẶT", en: "FACIAL RITUALS", jp: "フェイシャル儀式", ko: "페이셜 리추얼", zh: "面部仪式" },
        items: [
          {
            name: { vi: "Dưỡng sinh da mặt", en: "Basic Facial", jp: "ベーシックフェイシャル", ko: "베이직 페이셜", zh: "基础面部护理" },
            duration: { vi: ["30 phút"], en: ["30 min"], jp: ["30分"], ko: ["30분"], zh: ["30分钟"] },
            description: { 
              vi: "Làm sạch da, mang lại cảm giác thư giãn nhẹ nhàng.", 
              en: "Cleanses skin and provides gentle relaxation.", 
              jp: "肌を浄化し、穏やかなリラックス感を提供します。",
              ko: "피부를 정돈하고 편안한 휴식을 제공합니다.",
              zh: "清洁皮肤，带来温和放松的感觉。"
            },
            price: { vi: "550.000", en: "550k", jp: "550k", ko: "550k", zh: "550k" }
          },
          {
            name: { vi: "Dưỡng sinh da mặt chuyên sâu", en: "Intensive Facial", jp: "集中フェイシャル", ko: "인텐시브 페이셜", zh: "深度面部护理" },
            duration: { vi: ["60 phút"], en: ["60 min"], jp: ["60분"], ko: ["60분"], zh: ["60分钟"] },
            description: { 
              vi: "Nuôi dưỡng chuyên sâu, giúp làn da ẩm mịn, rạng rỡ.", 
              en: "Deep nourishment for hydrated, radiant skin.", 
              jp: "潤いと輝きのある肌のための深層栄養補給。",
              ko: "집중적인 영양 공급으로 촉촉하고 빛나는 피부를 만들어 줍니다.",
              zh: "深度滋养，使皮肤水润光彩。"
            },
            price: { vi: "880.000", en: "880k", jp: "880k", ko: "880k", zh: "880k" }
          }
        ]
      }
    ]
  },
  hair: {
    title: { vi: "Gội Đầu", en: "Hair Care", jp: "ヘアケア", ko: "헤어 케어", zh: "洗头/美发" },
    sections: [
      {
        subtitle: { vi: "GỘI ĐẦU DƯỠNG SINH", en: "NUTRITIONAL SHAMPOO", jp: "栄養シャンプー", ko: "영양 샴푸", zh: "养生洗头" },
        items: [
          {
            name: { vi: "Gội sạch", en: "Clean Wash", jp: "クリーンウォッシュ", ko: "클린 워시", zh: "清洁洗发" },
            duration: { vi: ["30 phút"], en: ["30 min"], jp: ["30分"], ko: ["30분"], zh: ["30分钟"] },
            description: { 
              vi: "Làm sạch da đầu và thư giãn nhẹ.", 
              en: "Cleanse scalp and light relaxation.", 
              jp: "頭皮のクレンジングと軽度のリラックス。",
              ko: "두피 청정과 가벼운 이완 효과를 줍니다.",
              zh: "清洁头皮，轻微放松。"
            },
            price: { vi: "99.000", en: "99k", jp: "99k", ko: "99k", zh: "99k" }
          },
          {
            name: { vi: "Gội cổ vai gáy", en: "Neck & Shoulder Wash", jp: "首・肩・シャンプー", ko: "목/어깨 집중 샴푸", zh: "颈肩洗发" },
            duration: { vi: ["45 phút"], en: ["45 min"], jp: ["45분"], ko: ["45분"], zh: ["45分钟"] },
            description: { 
              vi: "Kết hợp massage cổ vai gáy.", 
              en: "Combined with neck and shoulder massage.", 
              jp: "首と肩のマッサージ付き。",
              ko: "목과 어깨 마사지가 포함되어 있습니다.",
              zh: "结合颈肩按摩。"
            },
            price: { vi: "250.000", en: "250k", jp: "250k", ko: "250k", zh: "250k" }
          },
          {
            name: { vi: "Gội cổ vai gáy chuyên sâu", en: "Intensive N&S Wash", jp: "首・肩・シャンプー集中", ko: "인텐시브 목/어깨 샴푸", zh: "深度颈肩洗发" },
            duration: { vi: ["60 phút"], en: ["60 min"], jp: ["60분"], ko: ["60분"], zh: ["60分钟"] },
            description: { 
              vi: "Tập trung làm mềm các vùng căng cứng.", 
              en: "Focus on softening stiff areas.", 
              jp: "凝り固まった部分をほぐすことに集中します。",
              ko: "심하게 뭉친 부위를 집중적으로 풀어줍니다.",
              zh: "重点软化僵硬部位。"
            },
            price: { vi: "350.000", en: "350k", jp: "350k", ko: "350k", zh: "350k" }
          }
        ]
      }
    ]
  }
};
