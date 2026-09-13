import { useState } from 'react';
import { Globe, GraduationCap, BookOpen, Briefcase, ChevronDown, ShieldCheck, BookMarked } from 'lucide-react';
import CourseHero from '@/components/CourseHero';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

/* ─── Section 2: HSK Là Gì? ─── */

const valueProps = [
  { icon: Globe, title: 'Công Nhận Toàn Cầu', desc: 'Có giá trị quốc tế, hiệu lực 2 năm.' },
  { icon: GraduationCap, title: 'Miễn Thi Ngoại Ngữ', desc: 'Miễn thi tốt nghiệp THPT & một số học phần đại học.' },
  { icon: BookOpen, title: 'Cửa Vào Du Học TQ', desc: 'Căn cứ xét tuyển của các trường đại học Trung Quốc.' },
  { icon: Briefcase, title: 'Cơ Hội Việc Làm', desc: 'Chứng chỉ bắt buộc để làm việc tại Trung Quốc.' },
];

function HskIntroSection() {
  return (
    <section className="bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-[#BA7517]">Tìm hiểu về HSK</p>
          <h2 className="font-display text-3xl leading-tight text-brand-red sm:text-4xl lg:text-5xl">HSK Là Gì?</h2>
          <p className="mx-auto mt-6 max-w-3xl font-sans leading-relaxed text-gray-600">
            HSK (Hanyu Shuiping Kaoshi - 汉语水平考试) là kỳ thi khảo sát trình độ tiếng Hán dành cho người không sử dụng tiếng Hán là tiếng mẹ đẻ, được công nhận giá trị trên toàn thế giới trong vòng 2 năm kể từ ngày cấp.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="rounded-2xl border border-[#BA7517]/30 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#BA7517]/60 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/15">
                <prop.icon className="h-7 w-7 text-brand-gold-deep" />
              </div>
              <h3 className="font-sans text-base font-bold text-brand-red">{prop.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-gray-600">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: 9 Cấp Độ HSK ─── */

const hskTiers = [
  { name: 'SƠ CẤP', levels: 'HSK 1-3', cefr: 'Tương đương A1-B1 (CEFR)' },
  { name: 'TRUNG CẤP', levels: 'HSK 4-6', cefr: 'Tương đương B2-C2 (CEFR)' },
  { name: 'CAO CẤP', levels: 'HSK 7-9', cefr: 'Trình độ chuyên sâu' },
];

function HskLevelsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-red px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -right-16 top-8 font-display text-[18rem] leading-none text-white/[0.035] select-none" aria-hidden="true">级</div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/70 sm:w-20" />
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-brand-gold">Phân cấp trình độ</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/70 sm:w-20" />
          </div>
          <h2 className="font-display text-3xl leading-tight text-brand-ivory sm:text-4xl lg:text-5xl">HSK Có 9 Cấp Độ</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {hskTiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl border-2 border-brand-gold/60 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-brand-gold hover:bg-white/10"
            >
              <h3 className="font-sans text-lg font-bold uppercase tracking-[0.15em] text-brand-gold">{tier.name}</h3>
              <p className="mt-4 font-display text-2xl text-brand-ivory sm:text-3xl">{tier.levels}</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">{tier.cefr}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-sans text-sm text-white/60">
          Đăng ký thi ở cấp độ nào sẽ được đánh giá và cấp chứng chỉ đúng cấp độ đó.
        </p>
      </div>
    </section>
  );
}

/* ─── Section 4: Các Lớp Luyện Thi ─── */

const courseLevels = [
  { level: 'NEW HSK 2', sessions: '30 buổi', target: 'Thí sinh dự thi HSK1-2 hoặc đã học Hán ngữ tích hợp New HSK2', content: 'Củng cố ngữ pháp, luyện kỹ năng làm bài, bổ sung từ vựng trọng tâm.' },
  { level: 'NEW HSK 3', sessions: '30 buổi', target: 'Thí sinh dự thi HSK3 hoặc đã học Hán ngữ tích hợp New HSK3', content: 'Luyện đề sát cấu trúc thi, nâng cao kỹ năng Nghe - Đọc - Viết.' },
  { level: 'NEW HSK 4', sessions: '30 buổi', target: 'Thí sinh dự thi HSK4 hoặc đã học Hán ngữ tích hợp New HSK4', content: 'Chiến thuật làm bài, thực hành đề thật, mở rộng từ vựng học thuật.' },
  { level: 'NEW HSK 5', sessions: '35 buổi', target: 'Thí sinh dự thi HSK5 hoặc đã học Hán ngữ tích hợp New HSK5', content: 'Luyện tập chuyên sâu, kỹ năng viết luận, phân tích đề thi khó.' },
  { level: 'NEW HSK 6', sessions: '40 buổi', target: 'Thí sinh dự thi HSK6 hoặc đã học Hán ngữ tích hợp New HSK6', content: 'Ôn tập toàn diện, kỹ năng đọc hiểu nâng cao, viết học thuật chuyên sâu.' },
];

function CourseLevelsSection() {
  return (
    <section className="bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-[#BA7517]">Chương trình đào tạo</p>
          <h2 className="font-display text-3xl leading-tight text-brand-red sm:text-4xl lg:text-5xl">Các Lớp Luyện Thi HSK Tại ThanhMaiHSK</h2>
        </div>

        {/* Desktop table */}
        <div className="mt-12 hidden overflow-hidden rounded-2xl border border-[#BA7517]/30 shadow-lg md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-brand-gold/20">
                <th className="px-6 py-4 text-left font-sans text-sm font-bold uppercase tracking-wide text-brand-gold-deep">Cấp Độ</th>
                <th className="px-6 py-4 text-left font-sans text-sm font-bold uppercase tracking-wide text-brand-gold-deep">Đối Tượng</th>
                <th className="px-6 py-4 text-left font-sans text-sm font-bold uppercase tracking-wide text-brand-gold-deep">Nội Dung</th>
                <th className="px-6 py-4 text-center font-sans text-sm font-bold uppercase tracking-wide text-brand-gold-deep">Số Buổi</th>
              </tr>
            </thead>
            <tbody>
              {courseLevels.map((row, i) => (
                <tr
                  key={row.level}
                  className={`border-t border-[#BA7517]/20 ${i % 2 === 0 ? 'bg-white' : 'bg-brand-cream'}`}
                >
                  <td className="px-6 py-4 font-sans text-sm font-bold text-brand-red whitespace-nowrap">{row.level}</td>
                  <td className="px-6 py-4 font-sans text-sm leading-relaxed text-gray-600">{row.target}</td>
                  <td className="px-6 py-4 font-sans text-sm leading-relaxed text-gray-600">{row.content}</td>
                  <td className="px-6 py-4 text-center font-sans text-sm font-bold text-brand-gold-deep whitespace-nowrap">{row.sessions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-8 space-y-4 md:hidden">
          {courseLevels.map((row) => (
            <div key={row.level} className="rounded-xl border border-[#BA7517]/30 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-base font-bold text-brand-red">{row.level}</h3>
                <span className="rounded-full bg-brand-gold/20 px-3 py-1 font-sans text-xs font-bold text-brand-gold-deep">{row.sessions}</span>
              </div>
              <p className="mt-3 font-sans text-sm leading-relaxed text-gray-600">{row.target}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-gray-500">{row.content}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-sans text-sm text-gray-500">
          Học viên có thể lựa chọn hình thức học Online hoặc Offline.
        </p>
      </div>
    </section>
  );
}

/* ─── Section 5: Hình Ảnh Lớp Học ─── */

function ClassImagesSection() {
  return (
    <section className="bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-12">
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border-2 border-brand-gold/50" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-xl border-2 border-brand-gold shadow-xl shadow-black/15">
              <img
                src="https://res.cloudinary.com/qugyphlv/image/upload/v1789005178/hoat-dong_2.jpg"
                alt="Lớp học sôi động tại ThanhMaiHSK"
                className="h-[320px] w-full object-cover sm:h-[380px]"
              />
            </div>
            <p className="mt-4 text-center font-sans text-sm font-semibold text-brand-red">Lớp học sôi động, tương tác cao</p>
          </div>

          <div className="relative sm:mt-12">
            <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-xl border-2 border-brand-gold/50" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-xl border-2 border-brand-gold shadow-xl shadow-black/15">
              <img
                src="https://res.cloudinary.com/qugyphlv/image/upload/v1789256928/khoa-hoc-hsk.webp"
                alt="Giáo trình luyện đề HSK"
                className="h-[320px] w-full object-cover sm:h-[380px]"
              />
            </div>
            <p className="mt-4 text-center font-sans text-sm font-semibold text-brand-red">Giáo trình luyện đề sát cấu trúc thi thật</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 6: Cam Kết + Giáo Trình ─── */

function CommitmentSection() {
  return (
    <section className="bg-brand-cream px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          <div className="rounded-2xl border-2 border-[#BA7517]/40 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#BA7517]/70 hover:shadow-lg">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold/15">
              <BookMarked className="h-7 w-7 text-brand-gold-deep" />
            </div>
            <h3 className="font-display text-xl text-brand-red sm:text-2xl">Giáo Trình Độc Quyền</h3>
            <p className="mt-4 font-sans leading-relaxed text-gray-600">
              Biên soạn riêng bởi giảng viên nhiều năm kinh nghiệm, bám sát format đề thi mới nhất của Hanban.
            </p>
          </div>

          <div className="relative rounded-2xl border-2 border-brand-gold bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Ribbon badge */}
            <div className="absolute -top-3 right-6 rounded-full bg-brand-red px-4 py-1 font-sans text-xs font-bold uppercase tracking-wide text-brand-gold shadow-md">
              Cam Kết
            </div>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10">
              <ShieldCheck className="h-7 w-7 text-brand-red" />
            </div>
            <h3 className="font-display text-xl text-brand-red sm:text-2xl">Cam Kết Đầu Ra</h3>
            <p className="mt-4 font-sans leading-relaxed text-gray-600">
              Cam kết đỗ nếu học và ôn thi đầy đủ theo lộ trình. Trượt kỹ năng nào, học lại kỹ năng đó miễn phí.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 7: FAQ ─── */

const faqItems = [
  {
    q: 'Chứng chỉ HSK do cơ quan nào cấp và tổ chức thi ở đâu?',
    a: 'HSK do Hanban (Bộ Giáo dục Trung Quốc) quản lý, thiết kế bởi Đại học Ngôn ngữ Bắc Kinh. Tại Việt Nam, HSK được tổ chức tại 5 điểm thi: Viện Khổng Tử - ĐH Hà Nội, ĐH Ngoại ngữ - ĐHQG Hà Nội, ĐH Thái Nguyên, ĐH Ngoại ngữ Huế và ĐH Sư phạm TP.HCM.',
  },
  {
    q: 'HSK có mấy cấp độ và quy đổi sang khung châu Âu (CEFR) thế nào?',
    a: 'HSK có 9 cấp độ: Sơ cấp (HSK 1-3), Trung cấp (HSK 4-6), Cao cấp (HSK 7-9). Quy đổi CEFR: HSK1=A1, HSK2=A2, HSK3=B1, HSK4=B2, HSK5=C1, HSK6=C2.',
  },
  {
    q: 'Có bắt buộc phải thi lần lượt từng cấp độ HSK không?',
    a: 'Không. Bạn có thể làm đề thử để xác định trình độ rồi chọn cấp thi phù hợp, không cần thi tuần tự từ thấp lên cao.',
  },
  {
    q: 'Lệ phí thi HSK hiện nay khoảng bao nhiêu?',
    a: 'Tham khảo: HSK3+HSKK sơ cấp ~1.330.000đ, HSK4+HSKK trung cấp ~1.600.000đ, HSK5+HSKK cao cấp ~1.900.000đ, HSK6+HSKK cao cấp ~2.150.000đ, HSK7-9 ~2.400.000đ. Lệ phí có thể thay đổi theo từng thời điểm.',
  },
  {
    q: 'Cấu trúc đề thi HSK có khó không?',
    a: 'Đề thi tăng dần độ khó qua các cấp, gồm phần Nghe, Đọc hiểu và Viết (từ HSK3 trở lên), thời lượng từ 40 phút (HSK1) đến 140 phút (HSK6). ThanhMaiHSK sẽ giúp bạn luyện tập sát cấu trúc đề thi thật.',
  },
];

function FaqCourseSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-brand-red px-6 py-20 sm:py-28" style={{ scrollMarginTop: '88px' }}>
      <div className="pointer-events-none absolute -right-16 top-8 font-display text-[18rem] leading-none text-white/[0.035] select-none" aria-hidden="true">問</div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/70 sm:w-20" />
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-brand-gold">Giải đáp thắc mắc</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/70 sm:w-20" />
          </div>
          <h2 className="font-display text-3xl leading-tight text-brand-ivory sm:text-4xl lg:text-5xl">Câu Hỏi Thường Gặp Về HSK</h2>
        </div>

        <div className="mt-10 border-t border-brand-gold/25">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className="border-b border-brand-gold/25">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-sans text-base font-semibold text-brand-ivory transition-colors hover:text-brand-gold focus:outline-none focus-visible:text-brand-gold sm:text-lg"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-brand-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className="grid transition-[grid-template-rows] duration-300" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 font-sans leading-relaxed text-white/70">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */

export default function HskCoursePage() {
  return (
    <div className="relative w-full">
      <CourseHero
        imageSrc="https://res.cloudinary.com/qugyphlv/image/upload/v1789005192/hoat-dong_9.jpg"
        imageAlt="Hoạt động tại ThanhMaiHSK"
        label="Khóa Học"
        heading="Luyện Thi HSK/HSKK Cấp Tốc"
        paragraph="Lộ trình bài bản, bám sát đề thi thật — chinh phục HSK với điểm số mong muốn chỉ sau 1 khóa học."
        buttonText="Đăng Ký Nhận Tư Vấn"
      />
      <div className="h-[130px] bg-brand-cream sm:h-[170px] md:h-[200px]" aria-hidden="true" />
      <HskIntroSection />
      <HskLevelsSection />
      <CourseLevelsSection />
      <ClassImagesSection />
      <CommitmentSection />
      <FaqCourseSection />
      <CtaSection
        enableFadeIn={false}
        label="Bắt đầu hành trình chinh phục HSK"
        heading="Sẵn Sàng Đạt Điểm Số Mơ Ước Cùng ThanhMaiHSK?"
        paragraph="Đăng ký nhận tư vấn lộ trình luyện thi HSK/HSKK phù hợp nhất với trình độ và mục tiêu của bạn."
        buttonText="Đăng Ký Nhận Tư Vấn"
      />
      <Footer enableFadeIn={false} />
    </div>
  );
}
