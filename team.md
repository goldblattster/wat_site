---
layout: default
title: Team
permalink: /team/
order: 1
---

## Team Members

<div class="row mb-3">
    {% for member in site.data.team["team"] %}
        {% include teamhead.html member=member %}
    {% endfor %}
</div>

### Mentors
<div class="row">
    {% for member in site.data.team["mentors"] %}
        {% include teamhead.html member=member %}
    {% endfor %}
</div>