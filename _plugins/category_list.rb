# Place the file in the _plugins directory.
# Add this:
# <h1>Categories</h1>
# <ul li="categories">
# {% category_list %}
# </ul>

module Jekyll
    class CategoryListTag < Liquid::Tag
        def render(context)
            html = ""
            categories = context.registers[:site].categories.keys
            categories.sort.each do |category|
                posts_in_category = context.registers[:site].categories[category].size
                html << "<li class='category'><a href='/categories/#{category}/'>#{category}</a></li>\n"
            end
            html
        end
    end
end

Liquid::Template.register_tag('category_list', Jekyll::CategoryListTag)
