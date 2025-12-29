const About = () => {
  return (
    <section className="flex items-center flex-col my-12 px-4">
      <h2 className="text-lg font-bold mb-8">بنویس چیه؟</h2>
      <div className="font-extralight text-base/7.5">
        <p>
          <strong>بنویس</strong> یک شبکه اجتماعی مبتنی بر متن است؛ فضایی{" "}
          <strong>امن</strong> و <strong>متن‌باز</strong> برای نوشتن و به اشتراک
          گذاشتن افکار و دیدگاه‌ها.
        </p>

        <p>
          در بنویس، <strong>نوشتن مهم‌تر از دیده شدن</strong> است. کاربران
          می‌توانند نوشته‌های خود را منتشر کنند و در محیطی محترمانه، نوشته‌های
          دیگران را بخوانند.
        </p>

        <p>
          <strong>رعایت قوانین گفتار و پرهیز از توهین</strong> از اولویت‌های
          اصلی ماست و تلاش می‌کنیم فضایی سالم برای گفتگو فراهم کنیم.
        </p>

        <p>
          بنویس یک پروژه <strong>متن‌باز</strong> است. اگر توسعه‌دهنده هستید،
          می‌توانید در پیشرفت{" "}
          <strong>
            <a
              href="https://github.com/Awmiroosen/benevis"
              className="underline"
              target="_blank"
            >
              این پروژه
            </a>
          </strong>{" "}
          مشارکت کنید.
        </p>

        <hr className="my-6" />

        <p>
          © تمامی حقوق محفوظ است. مسئولیت محتوای منتشرشده بر عهده‌ی نویسنده است.
        </p>
      </div>
    </section>
  );
};

export default About;
