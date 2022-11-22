names = %w(Taro)
fnames = ["山田"]
gnames = ["太郎"]
0.upto(1) do |idx|
    Member.create(
        name: names[idx],
        full_name: "#{fnames[idx % 4]} #{gnames[idx % 3]}",
        email: "#{names[idx]}@example.com",
        birthday: "2000-12-19",
        sex: [1, 1, 2][idx % 3]

        administrator: (idx == 0),
        password: "asagao!",
        password_confirmation: "asagao!"
    )

end