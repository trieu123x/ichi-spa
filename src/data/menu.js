export const menuData = {
  body: {
    title: { vi: "Body & Foot Trị Liệu", en: "Body & Foot Therapy", jp: "ボディ＆フットセラピー" },
    sections: [
      {
        subtitle: { vi: "I. Trị Liệu Toàn Thân (Thư giãn cơ bản)", en: "I. Full Body Therapy (Basic)", jp: "I. 全身セラピー（ベーシック）" },
        items: [
          {
            name: { vi: "Aroma Massage", en: "Aroma Massage", jp: "アロママッサージ" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: { 
              vi: "Thư giãn nhẹ nhàng với tinh dầu thiên nhiên, giúp cơ thể thả lỏng và tinh thần dịu lại.",
              en: "Gentle relaxation with natural oils to help the body loosen up and calm the spirit.",
              jp: "天然オイルを使用した穏やかなリラクゼーションで、体の緊張をほぐし、心を落ち着かせます。"
            },
            price: ["450.000", "550.000"]
          },
          {
            name: { vi: "Trị liệu toàn thân với Đá Nóng", en: "Hot Stone Body Therapy", jp: "ホットストーン・ボディセラピー" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: {
              vi: "Nhiệt ấm giúp làm mềm cơ và hỗ trợ cơ thể phục hồi sau những ngày căng thẳng.",
              en: "Warm heat helps soften muscles and supports recovery after stressful days.",
              jp: "温かい熱が筋肉を和らげ、ストレスの多い日々からの回復をサポートします。"
            },
            price: ["480.000", "580.000"]
          }
        ]
      },
      {
        subtitle: { vi: "Trị liệu chuyên sâu", en: "Intensive Therapy", jp: "集中セラピー" },
        items: [
          {
            name: { vi: "Trị liệu toàn thân với Bóng Thảo Dược", en: "Herbal Ball Body Therapy", jp: "ハーバルボール・ボディセラピー" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: {
              vi: "Hơi ấm thảo dược lan sâu, phù hợp với cơ thể đau mỏi kéo dài.",
              en: "Deep herbal warmth, perfect for lingering body aches.",
              jp: "ハーブの深層的な温かさが、長引く体の痛みに最適です。"
            },
            price: ["520.000", "610.000"]
          }
        ]
      },
      {
        subtitle: { vi: "⭐ SIGNATURE - ĐƯỢC TIN CHỌN NHIỀU NHẤT", en: "⭐ SIGNATURE - MOST CHOSEN", jp: "⭐ シグネチャー - 最も選ばれているメニュー" },
        items: [
          {
            name: { vi: "Trị liệu Toàn Thân với Ngải Đặc Biệt", en: "Special Moxa Therapy", jp: "スペシャルもぐさセラピー" },
            badge: "HOT",
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: {
              vi: "Hơi ấm từ điếu ngải giúp làm ấm sâu và lưu thông tốt hơn, giải toả căng thẳng và đau mỏi.",
              en: "Warmth from moxa stick helps warm deep and circulate better, relieving stress and aches.",
              jp: "もぐさのお灸による温かさが深部まで届き、血行を促進し、ストレスや痛みを和らげます。"
            },
            price: ["599.000", "699.000"]
          },
          {
            name: { vi: "Trị liệu Toàn Thân với MUỐI PHỤC DƯỢC", en: "RECOVERY SALT Therapy", jp: "リカバリーソルトセラピー" },
            badge: "95% back",
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: {
              vi: "Muối sao thảo mộc thủ công, đặc trị đau mỏi vai gáy, lưng và tê bì tay chân.",
              en: "Hand-roasted herb salts, specialized for neck, shoulder, and back pain.",
              jp: "手作りのハーブ塩が、首、肩、背中の痛みや手足のしびれを解消します。"
            },
            price: ["599.000", "699.000"]
          },
          {
            name: { vi: "Trị Liệu Toàn Thân với Bùn Cứu Dưỡng Sinh", en: "Nutritional Mud Healing", jp: "養生泥セラピー" },
            badge: "Must try",
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: {
              vi: "Lớp bùn dược tính giúp trục xuất hàn khí và độc tố. Làm ấm vùng lõi cơ thể.",
              en: "Therapeutic mud layer expels cold and toxins. Warms the body core.",
              jp: "薬用泥が冷えや毒素を排出します。体の芯から温めます。"
            },
            price: ["599.000", "699.000"]
          }
        ]
      },
      {
        subtitle: { vi: "🌿 LIỆU TRÌNH PHỤC HỒI CHUYÊN SÂU 120’", en: "🌿 INTENSIVE RECOVERY (120 min)", jp: "🌿 集中集中回復 (120分)" },
        items: [
          {
            name: { vi: "Nghi thức dưỡng sinh toàn diện", en: "Full Wellness Ritual", jp: "総合ウェルネス儀式" },
            duration: { vi: ["120 phút"], en: ["120 min"], jp: ["120分"] },
            description: {
              vi: "Kết hợp Muối Phục Dược và ngải, giúp cơ thể thả lỏng và phục hồi rõ rệt.",
              en: "Combines Recovery Salt and Moxa for visible relaxation and recovery.",
              jp: "リカバリーソルトともぐさを組み合わせ、目に見えるリラクゼーションと回復を促します。"
            },
            price: ["860.000"]
          }
        ]
      }
    ]
  },
  neck_shoulder: {
    title: { vi: "Cổ Vai Gáy", en: "Neck & Shoulder", jp: "首・肩" },
    sections: [
      {
        subtitle: { vi: "II. TRỊ LIỆU CỔ VAI GÁY", en: "II. NECK & SHOULDER THERAPY", jp: "II. 首・肩セラピー" },
        items: [
          {
            name: { vi: "Trị liệu Cổ Vai Gáy Chuyên Sâu", en: "Intensive Neck & Shoulder", jp: "首・肩集中ケア" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: { 
              vi: "Tập trung giải phóng các điểm căng cứng vùng cổ – vai – lưng trên. Phù hợp cho dân văn phòng.",
              en: "Focus on releasing tension in neck, shoulders, and upper back. Ideal for office workers.",
              jp: "首、肩、背中上部の緊張を和らげることに集中します。オフィスワーカーに最適です。"
            },
            price: ["490.000", "590.000"]
          }
        ]
      }
    ]
  },
  foot: {
    title: { vi: "Trị Liệu Chân", en: "Foot Therapy", jp: "フットセラピー" },
    sections: [
      {
        subtitle: { vi: "III. TRỊ LIỆU VÙNG CHÂN", en: "III. FOOT THERAPY", jp: "III. フットセラピー" },
        items: [
          {
            name: { vi: "Trị liệu chân với Đá Nóng", en: "Foot Hot Stone Therapy", jp: "フットホットストーン" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: { 
              vi: "Làm ấm bàn chân và bắp chân, giảm cảm giác nặng - tê - mỏi.",
              en: "Warms feet and calves, reducing heaviness and numbness.",
              jp: "足とふくらはぎを温め、重さやしびれを軽減します。"
            },
            price: ["390.000", "490.000"]
          },
          {
            name: { vi: "Trị liệu chân với Bóng Thảo Dược", en: "Foot Herbal Ball Therapy", jp: "フットハーバルボール" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: { 
              vi: "Hơi ấm thảo dược giúp làm mềm cơ và hỗ trợ lưu thông tốt hơn.",
              en: "Herbal warmth softens muscles and supports better circulation.",
              jp: "ハーブの温かさが筋肉を和らげ、血行を促進します。"
            },
            price: ["460.000", "550.000"]
          }
        ]
      }
    ]
  },
  exfoliation: {
    title: { vi: "Tẩy Tế Bào Chết", en: "Exfoliation", jp: "角質除去" },
    sections: [
      {
        subtitle: { vi: "TẨY TẾ BÀO CHẾT", en: "BODY & FOOT SCRUB", jp: "ボディ＆フットスクラブ" },
        items: [
          {
            name: { vi: "Tẩy da chết toàn thân", en: "Full Body Scrub", jp: "全身スクラブ" },
            duration: { vi: ["45 phút"], en: ["45 min"], jp: ["45分"] },
            description: { 
              vi: "Làm sạch lớp da chết tích tụ, mang lại làn da mềm mại, tươi mới.",
              en: "Clears dead skin accumulation for soft, refreshed skin.",
              jp: "蓄積した角質を取り除き、柔らかくリフレッシュした肌へ導きます。"
            },
            price: ["599.000"]
          },
          {
            name: { vi: "Tẩy da chết chân", en: "Foot Scrub", jp: "フットスクラブ" },
            duration: { vi: ["20 phút"], en: ["20 min"], jp: ["20分"] },
            description: { vi: "Phục hồi gót ngọc với tẩy tế bào chết và ngâm chân.", en: "Restore your heels with scrub and foot soak.", jp: "スクラブと足湯でかかとをケアします。" },
            price: ["290.000"]
          }
        ]
      }
    ]
  },
  facial: {
    title: { vi: "Chăm Sóc Da Mặt", en: "Facial Care", jp: "フェイシャルケア" },
    sections: [
      {
        subtitle: { vi: "CHĂM SÓC DA MẶT", en: "FACIAL RITUALS", jp: "フェイシャル儀式" },
        items: [
          {
            name: { vi: "Dưỡng sinh da mặt", en: "Basic Facial", jp: "ベーシックフェイシャル" },
            duration: { vi: ["30 phút"], en: ["30 min"], jp: ["30分"] },
            description: { vi: "Làm sạch da, mang lại cảm giác thư giãn nhẹ nhàng.", en: "Cleanses skin and provides gentle relaxation.", jp: "肌を浄化し、穏やかなリラックス感を提供します。" },
            price: ["550.000"]
          },
          {
            name: { vi: "Dưỡng sinh da mặt chuyên sâu", en: "Intensive Facial", jp: "集中フェイシャル" },
            duration: { vi: ["60 phút"], en: ["60 min"], jp: ["60分"] },
            description: { vi: "Nuôi dưỡng chuyên sâu, giúp làn da ẩm mịn, rạng rỡ.", en: "Deep nourishment for hydrated, radiant skin.", jp: "潤いと輝きのある肌のための深層栄養補給。" },
            price: ["880.000"]
          }
        ]
      }
    ]
  },
  hair: {
    title: { vi: "Gội Đầu", en: "Hair Care", jp: "ヘアケア" },
    sections: [
      {
        subtitle: { vi: "GỘI ĐẦU DƯỠNG SINH", en: "NUTRITIONAL SHAMPOO", jp: "栄養シャンプー" },
        items: [
          {
            name: { vi: "Gội sạch", en: "Clean Wash", jp: "クリーンウォッシュ" },
            duration: { vi: ["30 phút"], en: ["30 min"], jp: ["30分"] },
            description: { vi: "Làm sạch da đầu và thư giãn nhẹ.", en: "Cleanse scalp and light relaxation.", jp: "頭皮のクレンジングと軽度のリラックス。" },
            price: ["99.000"]
          },
          {
            name: { vi: "Gội cổ vai gáy", en: "Neck & Shoulder Wash", jp: "首・肩・シャンプー" },
            duration: { vi: ["45 phút"], en: ["45 min"], jp: ["45分"] },
            description: { vi: "Kết hợp massage cổ vai gáy.", en: "Combined with neck and shoulder massage.", jp: "首と肩のマッサージ付き。" },
            price: ["250.000"]
          },
          {
            name: { vi: "Gội cổ vai gáy chuyên sâu", en: "Intensive N&S Wash", jp: "首・肩・シャンプー集中" },
            duration: { vi: ["60 phút"], en: ["60 min"], jp: ["60分"] },
            description: { vi: "Tập trung làm mềm các vùng căng cứng.", en: "Focus on softening stiff areas.", jp: "凝り固まった部分をほぐすことに集中します。" },
            price: ["350.000"]
          }
        ]
      }
    ]
  }
};
